const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: true} ));

module.exports = router;

router.get('/', (req, res) => {
  // db.get().collection('fruits').find().toArray((err, list) => {
  //   if (err) res.sendStatus(500);
  //   else res.send(list)
  // })
});

router.post('/fruits', (req, res) => {
  const newFruit = { name: req.body.name };
  db.get().collection('fruits').insert(newFruit, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(newFruit);
  })
});
