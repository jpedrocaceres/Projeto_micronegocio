// minimal-server.js - Test server
console.log('Starting minimal server...');

import express from 'express';

console.log('Express imported successfully');

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Creating basic route...');

app.get('/', (req, res) => {
  res.send('Minimal server working');
});

console.log('Starting server...');

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Minimal server running on port ${PORT}`);
});