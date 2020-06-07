const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

const checkResponse = (res, err, data) => {
  if (err) res.sendStatus(500);
  else res.send(data)
};

// Create
exports.create = (theme, res) => {
  db.get().collection('themes').insertOne(theme, (err, list) => checkResponse(res, err, list))
};

// Read
exports.find = (params, res) => {
  console.log(params);
  db.get().collection('themes').find(params).toArray((err, list) => checkResponse(res, err, list))
};

// Update
// exports.update = (params)

// Delete
exports.delete = (id, res) => {
  db.get().collection('themes').deleteOne({'_id': ObjectID(id)}, (err, list) => checkResponse(res, err, list))
};