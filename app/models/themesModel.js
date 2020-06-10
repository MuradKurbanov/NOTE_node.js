const db = require('../db');

const checkResponse = (res, err, data) => {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  }
  else res.send(data)
};

exports.create = (theme, res) => {
  db.get().collection('themes').insertOne(theme, (err, data) => checkResponse(res, err, data))
};

exports.find = (params, res) => {
  db.get().collection('themes').find(params).toArray((err, data) => checkResponse(res, err, data))
};

exports.update = (id, theme, res) => {
  db.get().collection('themes').updateOne(id, { $set: theme }, { upsert: false },
    (err, data) => checkResponse(res, err, data));
};

exports.delete = (id, res) => {
  db.get().collection('themes').deleteOne(id, (err, data) => checkResponse(res, err, data))
};