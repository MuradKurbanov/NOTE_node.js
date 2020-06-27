const express = require('express');
const bodyParser = require('body-parser');

const technologiesController = require('../controllers/technologiesController');
const topicsController = require('../controllers/topicsController');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: true} ));

module.exports = router;

// Technologies
router.get('/technologies', technologiesController.find);

router.get('/technologies/:id', technologiesController.find);

router.post('/technologies', technologiesController.create);

router.put('/technologies/:id', technologiesController.update);

router.delete('/technologies/:id', technologiesController.delete);

// Topics
router.get('/topics', topicsController.find);

router.get('/topics/:id', topicsController.find);

router.post('/topics', topicsController.create);

router.put('/topics/:id', topicsController.update);

router.delete('/topics/:id', topicsController.delete);

