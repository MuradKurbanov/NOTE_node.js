const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

const checkResponse = (res, err, data) => {
  if (err) res.sendStatus(500);
  else res.send(data)
};

exports.all = (res) => {
  db.get().collection('technologies').find().toArray((err, list) => checkResponse(res, err, list))
};

exports.findOne = (id, res) => {
  db.get().collection('technologies').findOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};

exports.create = (technology, res) => {
  db.get().collection('technologies').insertOne(technology, (err, list) => checkResponse(res, err, list))
};

exports.delete = (id, res) => {
  db.get().collection('technologies').deleteOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};

exports.deleteAll = res => {
  db.get().collection('technologies').deleteMany({}, (err, list) => checkResponse(res, err, list))
};