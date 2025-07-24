// server.js - Production server
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Serve built static files
app.use(express.static(path.join(__dirname, 'dist')));

// Health check for Firebase App Hosting
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Specific API routes (replace the wildcard)
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is working' });
});

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

// If you need to handle all API routes generically:
app.use('/api', (req, res) => {
  res.status(404).json({ 
    error: 'API endpoint not found',
    path: req.path,
    method: req.method 
  });
});

// SPA fallback (this should be LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});