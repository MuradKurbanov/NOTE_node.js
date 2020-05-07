const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) done()
  else {
    MongoClient.connect(url, (err, client) => {
      if (err) done(err);

      state.db = client.db('firstdb');
      done();
    })
  }
}

exports.get = () => state.db;
