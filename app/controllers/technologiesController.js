const TechnologiesController = require('../models/technologiesModel');

exports.all = (req, res) => {
  TechnologiesController.all((err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

exports.fingById = (req, res) => {
  TechnologiesController.findById(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};

exports.create = (req, res) => {
  const newFruit = { name: req.body.name };
  TechnologiesController.create(newFruit, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(newFruit);
  })
};

exports.delete = (req, res) => {
  TechnologiesController.delete(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};
 
