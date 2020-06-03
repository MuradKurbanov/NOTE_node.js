const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.all = (cb) => {
  db.get().collection('themes').find().toArray((err, list) => cb(err, list))
};

exports.findById = (id, cb) => {
  db.get().collection('themes').findOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};

exports.create = (themes, cb) => {
  db.get().collection('themes').insert(themes, (err, list) => cb(err, list))
};

exports.delete = (id, cb) => {
  db.get().collection('themes').deleteOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};

exports.deleteAll = cb => {
  db.get().collection('themes').deleteMany({}, (err, list) => cb(err, list))
};