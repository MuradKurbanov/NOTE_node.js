const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
};

exports.connect = (url, done) => {
  if (state.db) done();
  else {
    MongoClient.connect(url,{ useUnifiedTopology: true}, (err, client) => {
      if (err) done(err);

      state.db = client.db('memos');
      done();
    })
  }
};

exports.get = () => state.db;
