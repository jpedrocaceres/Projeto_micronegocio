import express from 'express';
import { createServer as createViteServer } from 'vite';

// Minimal test server
import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Cloud Run!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function createServer() {
  const app = express();
  
  const vite = await createViteServer({
    server: { middlewareMode: true }
  });
  
  app.use(vite.middlewares);
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

createServer();