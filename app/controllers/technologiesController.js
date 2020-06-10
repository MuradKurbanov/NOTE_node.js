const TechnologiesController = require('../models/technologiesModel');
const ObjectID = require('mongodb').ObjectID;

// Creat
exports.create = (req, res) => {
  const { name, description } = req.body;
  TechnologiesController.create({ name, description }, res)
};

// Read
exports.find = (req, res) => {
  const { id } = req.params;
  TechnologiesController.find(id ? {'_id': ObjectID(id) } : {}, res)
};

// Update
exports.update = (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  TechnologiesController.update({ '_id': ObjectID(id) }, {name, description}, res)
};

//Delete
exports.delete = (req, res) => {
  const { id } = req.params;
  TechnologiesController.delete({'_id': ObjectID(id)}, res)
};