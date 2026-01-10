// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDBconnect = require('./db')

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,Accept"
//   );
//   next();
// })

// mongoDBconnect();
// app.get('/', (req, res) => {
//   res.send('Hello World!!!')
// })

// app.use(express.json())
// app.use('/api',require("./routes/CreateUser"))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const app = express();
const port = 5000;
const mongoDBconnect = require('./db');
const cors = require('cors');

mongoDBconnect();

// Middleware
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
