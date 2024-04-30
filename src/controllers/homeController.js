const connection = require('../config/database')
const getHomePage = (req, res) =>{
  connection.query(
    `SELECT * FROM Users`,
    function(err, results, fields) {
      console.log(">>results: ", results);
      console.log(">>field: ", fields);
    }
  )
  res.render('sample.ejs');
}

module.exports = {
  getHomePage
}