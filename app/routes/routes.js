const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db');
const fruitController = require('../controllers/fruits');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: true} ));

module.exports = router;

router.get('/fruits', fruitController.all);

router.get('/fruits/:id', fruitController.fingById);

router.post('/fruits', fruitController.create);
