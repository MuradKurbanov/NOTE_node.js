const db = require('../db');

const checkResponse = (res, err, data) => {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  } else res.send(data)
};

exports.create = (technology, res) => {
  db.get().collection('technologies').insertOne(technology, (err, list) => checkResponse(res, err, list))
};

exports.find = (params, res) => {
  db.get().collection('technologies').find(params).toArray((err, data) => checkResponse(res, err, data))
};

exports.update = (id, technology, res) => {
  db.get().collection('technologies').updateOne(id, { $set: technology }, { upsert: false },
    (err, data) => checkResponse(res, err, data));
};

exports.delete = (id, res) => {
  db.get().collection('technologies').deleteOne(id, (err, list) => checkResponse(res, err, list))
};