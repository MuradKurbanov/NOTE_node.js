const TechnologiesController = require('../models/technologiesModel');
const ObjectID = require('mongodb').ObjectID;
const CacheControl = require('../constants');

// Creat
exports.create = (req, res) => {
  const { name, description, sources } = req.body;
  res.set(CacheControl);
  TechnologiesController.create({ name, description, sources }, res)
};

// Read
exports.find = (req, res) => {
  const { id } = req.params;
  res.set(CacheControl);
  TechnologiesController.find(id ? {'_id': ObjectID(id) } : {}, res)
};

// Update
exports.update = (req, res) => {
  const { name, description, sources } = req.body;
  const { id } = req.params;
  res.set(CacheControl);
  TechnologiesController.update({ '_id': ObjectID(id) }, {name, description, sources}, res)
};

//Delete
exports.delete = (req, res) => {
  const { id } = req.params;
  res.set(CacheControl);
  TechnologiesController.delete({'_id': ObjectID(id)}, res)
};