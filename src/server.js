const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')
const port = process.env.port || 3000;
configViewEngine(app);
app.use('/', webRoutes);

// test connection


connection.query(
  `SELECT * FROM Users`,
  function(err, results, fields) {
    console.log(">>results: ", results);
    console.log(">>field: ", fields);
  }
)


app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})