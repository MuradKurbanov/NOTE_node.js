const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => {
  db.get().collection('themes').find().toArray((err, list) => cb(err, list))
};

exports.findById = (id, cb) => {
  db.get().collection('themes').findOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};

exports.create = (fruit, cb) => {
  db.get().collection('themes').insert(fruit, (err, list) => cb(err, list))
};

exports.delete = (id, cb) => {
  db.get().collection('themes').deleteOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};

exports.deleteAll = cb => {
  db.get().collection('themes').deleteMany({}, (err, list) => cb(err, list))
};