const db = require('../db');

const checkResponse = (res, err, data) => {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  }
  else res.send(data)
};

// Create
exports.create = (theme, res) => {
  db.get().collection('themes').insertOne(theme, (err, data) => checkResponse(res, err, data))
};

// Read
exports.find = (params, res) => {
  db.get().collection('themes').find(params).toArray((err, data) => checkResponse(res, err, data))
};

// Update
exports.update = (id, theme, res) => {
  db.get().collection('themes').updateOne(id, { $set: theme }, { upsert: false },
    (err, data) => checkResponse(res, err, data));
};

// Delete
exports.delete = (id, res) => {
  db.get().collection('themes').deleteOne(id, (err, data) => checkResponse(res, err, data))
};