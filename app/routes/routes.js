const express = require('express');
const bodyParser = require('body-parser');

const technologiesController = require('../controllers/technologiesController');
const themesController = require('../controllers/themesController');

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

// Themes
router.get('/themes', themesController.find);

router.get('/themes/:id', themesController.find);

router.post('/themes', themesController.create);

router.put('/themes/:id', themesController.update);

router.delete('/themes/:id', themesController.delete);
