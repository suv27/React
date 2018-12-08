const express = require('express');
const mysql = require('mysql');
// const cors = require('cors');
const app = express();
const port = 4000;

// app.use(cors({origin: "http://localhost:8000",credentials: true }));

// CONNNECTION TO MYSQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BeastMode27',
  database: '_mydb'
})

connection.connect(err => {
  if(err) return err
})

// SQL QUERIES
const SELECT_ALL = `SELECT * FROM users`;

app.get('/', (req, res) => {
  res.send('Welcome, Go to /login');
})

app.get('/login/add', (req, res) => {
  const { username, passcode } = req.query;
  res.send(`Adding user info to _mydb -> username: ${username}, passcode: ${passcode}`);
  // console.log(`username: ${username}, passcode: ${passcode}`);
  const INSERT_USER = `INSERT INTO users (username, passcode) VALUES ('${username}', '${passcode}')`;
  connection.query(INSERT_USER, (err, results) => {
    if(err){
      returnres.send(err)
    }
    else{
      return res.send('Succesfully Inserted User!')
    }
  })
})

app.get('/users', (req, res) => {
  connection.query(SELECT_ALL, (err, results) => {
    if(err) {
      return res.send(err);
    }
    else {
      return res.json({
        users: results
      })
    }
  })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
