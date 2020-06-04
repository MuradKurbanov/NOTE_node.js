const TechnologiesController = require('../models/technologiesModel');
const ThemesController = require('../models/themesModel');

exports.all = (req, res) => {
  TechnologiesController.all(res)
};

exports.allThemesByTechnology = (req, res) => {
  ThemesController.allThemesByTechnology(req.body._id, res)
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