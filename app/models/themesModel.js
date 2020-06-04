const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

const checkResponse = (res, err, data) => {
  if (err) res.sendStatus(500);
  else res.send(data)
};

exports.all = (res) => {
  db.get().collection('themes').find().toArray((err, list) => checkResponse(res, err, list))
};

exports.allThemesByTechnology = (id, res) => {
  db.get().collection('themes').findOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};

exports.findById = (id, res) => {
  db.get().collection('themes').findOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};

exports.create = (theme, res) => {
  db.get().collection('themes').insertOne(theme, err => checkResponse(res, err, theme))
};

exports.delete = (id, res) => {
  db.get().collection('themes').deleteOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};

exports.deleteAll = res => {
  db.get().collection('themes').deleteMany({}, (err, list) => checkResponse(res, err, list))
};