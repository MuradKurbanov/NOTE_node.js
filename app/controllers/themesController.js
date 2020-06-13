const ThemesController = require('../models/themesModel');
const ObjectID = require('mongodb').ObjectID;

// Create new theme
exports.create = (req, res) => {
  const { name, description, example } = req.body;
  const { idTechnology, nameTechnology } = req.body.technology;
  ThemesController.create({
    name, description, example,
    technology: { idTechnology, nameTechnology },
    subThemes: req.body.subThemes
  }, res)
};

// Read - find all or by idTechnology
exports.find = (req, res) => {
  const { id } = req.params;
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  ThemesController.find(id ? {'technology.idTechnology': id } : {}, res)
};

// Update by id theme
exports.update = (req, res) => {
  const { name, description, example, subThemes } = req.body;
  const { id } = req.params;
  ThemesController.update({ '_id': ObjectID(id) }, {name, description, example, subThemes}, res)
};

// Delete by id theme
exports.delete = (req, res) => {
  const { id } = req.params;
  ThemesController.delete({ '_id': ObjectID(id) }, res);
};

