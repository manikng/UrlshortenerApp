import express from 'express';
import urlRoutes from './routes/url.js';

const app = express();
const PORT = process.env.PORT || 8000;

// ...existing code...
app.use('/url', urlRoutes);
// ...existing code...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
