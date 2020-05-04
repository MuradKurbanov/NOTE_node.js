const express = require('express');
const app = express();
const router = require('./app/routes/routes');

app.use('/', router);

app.listen(3000);
