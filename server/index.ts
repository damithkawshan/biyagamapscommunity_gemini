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
    const { category, description, location, image_url } = req.body;
    const newIssue = await pool.query(
      'INSERT INTO issues (category, description, location, image_url, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [category, description, location, image_url, 'new']
    );
    res.json(newIssue.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
