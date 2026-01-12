const express = require('express');
const app = express();
const port = 5000;
const mongoDBconnect = require('./db');
const cors = require('cors');

mongoDBconnect();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.use('/api', require('./routes/CreateUser'));

app.use('/api', require('./routes/DisplayData'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
