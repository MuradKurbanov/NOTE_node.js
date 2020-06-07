const TechnologiesController = require('../models/technologiesModel');

exports.all = (req, res) => {
  TechnologiesController.all(res)
};

exports.findOne = (req, res) => {
  TechnologiesController.findOne(req.params.id, res)
};

exports.create = (req, res) => {
  const { name, description } = req.body;
  TechnologiesController.create({ name, description }, res)
};

exports.delete = (req, res) => {
  TechnologiesController.delete(req.params.id, res)
};

exports.deleteAll = (req, res) => {
  TechnologiesController.deleteAll(res)
};