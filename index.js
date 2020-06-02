const express = require('express');

const db = require('./app/db');
const router = require('./app/routes/routes');

const app = express();

db.connect('mongodb://localhost:27017', err => {
  if (err) console.log(err);
  else app.use('/', router).listen(3000);
});
