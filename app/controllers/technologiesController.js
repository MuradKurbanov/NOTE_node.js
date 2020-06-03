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
  const { name, description } = req.body;
  TechnologiesController.create({ name, description }, err => {
    if (err) res.sendStatus(500);
    else res.send({ name, description });
  })
};

exports.delete = (req, res) => {
  TechnologiesController.delete(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
};
 
