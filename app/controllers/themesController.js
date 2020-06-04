const ThemesController = require('../models/themesModel');

// const subThemes = [
//   {
//     subThemeId: ObjectId(),
//     title: req.body.theme.subThemes[0].title,
//     description: req.body.theme.subThemes[0].description,
//     example: req.body.theme.subThemes[0].example
//   }
// ]

exports.all = (req, res) => {
  ThemesController.all(res)
};

exports.fingById = (req, res) => {
  ThemesController.findById(req.params.id, res)
};

exports.create = (req, res) => {
  ThemesController.create({
    name: req.body.name,
    technology: req.body.technology,
    theme: {
      title: req.body.theme.title,
      description: req.body.theme.description,
      example: req.body.theme.example,
    }
  }, res)
};

exports.delete = (req, res) => {
  ThemesController.delete(req.params.id, res)
};

exports.deleteAll = (req, res) => {
  ThemesController.deleteAll(res)
};

