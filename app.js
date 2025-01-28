const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//sd
app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Node.js app.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
