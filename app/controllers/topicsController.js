const TopicsController = require('../models/topicsModel');
const ObjectID = require('mongodb').ObjectID;
const CacheControl = require('../constants');

// Create new theme
exports.create = (req, res) => {
  const { name, description, example } = req.body;
  const { idTechnology, nameTechnology } = req.body.technology;
  TopicsController.create({
    name, description, example,
    technology: { idTechnology, nameTechnology },
    subThemes: req.body.subThemes
  }, res)
};

// Read - find all or by idTechnology
exports.find = (req, res) => {
  const { id } = req.params;
  res.set(CacheControl);
  TopicsController.find(id ? {'technology.idTechnology': id } : {}, res)
};

// Update by id theme
exports.update = (req, res) => {
  const { name, description, example, subThemes } = req.body;
  const { id } = req.params;
  TopicsController.update({ '_id': ObjectID(id) }, {name, description, example, subThemes}, res)
};

// Delete by id theme
exports.delete = (req, res) => {
  const { id } = req.params;
  TopicsController.delete({ '_id': ObjectID(id) }, res);
};

