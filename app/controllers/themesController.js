const ThemesController = require('../models/themesModel');
const ObjectID = require('mongodb').ObjectID;

// Create new theme
exports.create = (req, res) => {
  const { name, description, example } = req.body;
  const { idTechnology, nameTechnology } = req.body.technology;
  ThemesController.create({ name, technology: { idTechnology, nameTechnology }, description, example }, res)
};

// Read - find all or by idTechnology
exports.find = (req, res) => {
  const { id } = req.params;
  ThemesController.find(id ? {'technology.idTechnology': id } : {}, res)
};

// Update by id theme
exports.update = (req, res) => {
  const { name, description, example } = req.body;
  const { id } = req.params;
  ThemesController.update({ '_id': ObjectID(id) }, {name, description, example}, res)
};

// Delete by id theme
exports.delete = (req, res) => {
  const { id } = req.params;
  ThemesController.delete({ '_id': ObjectID(id) }, res);
};

