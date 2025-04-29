const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const quotes = [
  "Keep going, you're doing great!",
  "Believe in yourself!",
  "Stay positive and strong.",
  "Every day is a fresh start."
];

app.get('/api/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

