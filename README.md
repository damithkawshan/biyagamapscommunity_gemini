
  # biyagama.ps (Community)

  This is a code bundle for biyagama.ps (Community). The original project is available at https://www.figma.com/design/5NetRu0GmVjQit7gsYSNSd/biyagama.ps--Community-.

  ## Development Branch

  The main development branch is `local_dev`. To switch to the development branch, use:

  ```bash
  git checkout local_dev
  ```

  Or to create and switch to it if it doesn't exist locally:

  ```bash
  git checkout -b local_dev origin/local_dev
  ```

  ## Running the Application

  This project consists of two servers that need to be run simultaneously:

  ### Frontend Server

  1. Install dependencies (from the root directory):
     ```bash
     npm install
     ```

  2. Start the frontend development server:
     ```bash
     npm run dev
     ```

  The frontend will typically run on `http://localhost:5173` (Vite default port).

  ### Backend Server

  1. Navigate to the server directory:
     ```bash
     cd server
     ```

  2. Install backend dependencies:
     ```bash
     npm install
     ```

  3. Start the backend server:
     ```bash
     npm start
     ```

  The backend server will run on the port configured in the server's environment settings.

  ### Running Both Servers

  Open two terminal windows:
  - **Terminal 1**: Run `npm run dev` from the root directory (frontend)
  - **Terminal 2**: Run `cd server` then `npm start` (backend)
  