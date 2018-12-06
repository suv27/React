const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 4000;

// CONNNECTION TO MYSQL
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BeastMode27',
  database: '_mydb'
})

connection.connect(err => {
  if(err) return err
})


// SQL QUERIES
let SELECT_ALL = 'select * from tblUserLogin';

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome, Go to /register');
})

app.get('/registration', (req, res) => {
  connection.query(SELECT_ALL, (err, results) => {
    if(err) return res.send(err);
    else{
      return res.json({
        users: results
      })
    }
  })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
