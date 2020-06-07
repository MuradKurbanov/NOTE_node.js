const ThemesController = require('../models/themesModel');
const ObjectID = require('mongodb').ObjectID;

// Create new theme
exports.create = (req, res) => {
  ThemesController.create({
    name: req.body.name,
    technology: req.body.technology,
    description: req.body.description,
    example: req.body.example,
  }, res)
};

// Read - find all or by idTechnology
exports.find = (req, res) => {
  const { id } = req.params;
  ThemesController.find(id ? {'technology.idTechnology': id } : {}, res)
};
// { 'comments.2': { name: 'John' } }

// Update by id theme
// exports.update = (req, res) => {
//   ThemesController.update({"_id": ObjectID(req.params.id)}, res)
// };

// Delete by id theme
exports.delete = (req, res) => {
  ThemesController.delete(req.params.id, res)
};

