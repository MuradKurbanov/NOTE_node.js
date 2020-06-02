const ThemesController = require('../models/themesModel');
const ObjectId = require('mongodb').ObjectId;

exports.all = (req, res) => {
  ThemesController.all((err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

exports.fingById = (req, res) => {
  ThemesController.findById(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

exports.create = (req, res) => {
  const newFruit = {
    name: req.body.name,
    theme: {
      title: req.body.theme.title,
      description: req.body.theme.description,
      example: req.body.theme.example,
      subThemes: [
        {
          subThemeId: ObjectId(),
          title: req.body.theme.subThemes[0].title,
          description: req.body.theme.subThemes[0].description,
          example: req.body.theme.subThemes[0].example
        }
      ]
    }
  };
  ThemesController.create(newFruit, (err) => {
    if (err) res.sendStatus(500);
    else res.send(newFruit);
  })
};

exports.delete = (req, res) => {
  ThemesController.delete(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

exports.deleteAll = (req, res) => {
  ThemesController.deleteAll((err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

