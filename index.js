const express = require('express');
const cors = require('cors');

const db = require('./app/db');
const router = require('./app/routes/routes');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

db.connect('mongodb://localhost:27017', err => {
  if (err) console.log(err);
  else app.use('/', router).listen(PORT);
});
