const express = require('express');
const app = express();
const HelloWorld = require('./routes/routes');

app.use(HelloWorld)

app.listen(3000);
