const express = require('express');
const bodyParser = require('body-parser');

const technologiesController = require('../controllers/technologiesController');
const themesController = require('../controllers/themesController');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: true} ));

module.exports = router;

// Technologies
router.get('/technologies', technologiesController.all);

router.get('/technology/:id', technologiesController.allThemesByTechnology);

router.get('/technologies/:id', technologiesController.findOne);

router.post('/technologies', technologiesController.create);

router.delete('/technologies/:id', technologiesController.delete);

router.delete('/technologies', technologiesController.deleteAll);

// Themes
router.get('/themes', themesController.all);

router.get('/themes/:id', themesController.fingById);

router.post('/themes', themesController.create);

router.delete('/themes/:id', themesController.delete);

router.delete('/themes', themesController.deleteAll);

