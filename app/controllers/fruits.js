const Fruits = require('../models/fruits');

exports.all = (req, res) => {
  Fruits.all((err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
}

exports.fingById = (req, res) => {
  Fruits.findById(req.params.id, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(list)
  })
}

exports.create = (req, res) => {
  const newFruit = { name: req.body.name };
  Fruits.create(newFruit, (err, list) => {
    if (err) res.sendStatus(500);
    else res.send(newFruit);
  })
}
 
