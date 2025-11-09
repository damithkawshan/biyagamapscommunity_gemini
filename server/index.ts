import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/issues', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM issues');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/issues/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM issues WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Issue not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/issues', async (req, res) => {
  try {
    const {
      title,
      issue_type_id,
      description,
      location_latitude,
      location_longitude,
      manual_location,
      photo_url,
      reporter_name,
      reporter_email,
      reporter_phone,
      is_anonymous
    } = req.body;

    const newIssue = await pool.query(
      `INSERT INTO issues (
        title, issue_type_id, description, location_latitude, location_longitude, 
        manual_location, photo_url, reporter_name, reporter_email, reporter_phone, 
        is_anonymous, status, priority
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'new', 'medium') RETURNING *`,
      [
        title,
        issue_type_id,
        description,
        location_latitude,
        location_longitude,
        manual_location,
        photo_url,
        reporter_name,
        reporter_email,
        reporter_phone,
        is_anonymous
      ]
    );
    res.status(201).json(newIssue.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/issues/:id/history', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT 
        ish.id, 
        ish.status, 
        ish.notes, 
        ish.created_at, 
        u.name as updated_by_user
      FROM issue_status_history ish
      LEFT JOIN users u ON ish.updated_by_user_id = u.id
      WHERE ish.issue_id = $1
      ORDER BY ish.created_at DESC`,
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/wards', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM wards');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
