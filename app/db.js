const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) return done();

  else MongoClient.connect(url, (err, db) => {
    if (err) return done(err);

    state.db = db;
    console.log(state.db.collection('fruits'), 'state.db');
    done();
  })
}

exports.get = function () {
  return state.db
};
