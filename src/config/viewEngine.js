const path = require('path');
const express = require('express');
const configEngine = (app)=>{
  //config vieww engine
  console.log(__dirname)
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  //config static file
  app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = configEngine;