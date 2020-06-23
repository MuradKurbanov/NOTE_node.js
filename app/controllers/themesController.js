const ThemesController = require('../models/themesModel');
const ObjectID = require('mongodb').ObjectID;
const CacheControl = require('../constants');

// Create new theme
exports.create = (req, res) => {
  const { name, description, example } = req.body;
  const { idTechnology, nameTechnology } = req.body.technology;
  res.set(CacheControl);
  ThemesController.create({
    name, description, example,
    technology: { idTechnology, nameTechnology },
    subThemes: req.body.subThemes
  }, res)
};

// Read - find all or by idTechnology
exports.find = (req, res) => {
  const { id } = req.params;
  res.set(CacheControl);
  ThemesController.find(id ? {'technology.idTechnology': id } : {}, res)
};

// Update by id theme
exports.update = (req, res) => {
  const { name, description, example, subThemes } = req.body;
  const { id } = req.params;
  res.set(CacheControl);
  ThemesController.update({ '_id': ObjectID(id) }, {name, description, example, subThemes}, res)
};

// Delete by id theme
exports.delete = (req, res) => {
  const { id } = req.params;
  res.set(CacheControl);
  ThemesController.delete({ '_id': ObjectID(id) }, res);
};

