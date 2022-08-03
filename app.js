const express = require('express');
const apiRouter = require('./routes/api');
const problemRouter = require('./routes/problem');

const app = express();

app.use('/api', apiRouter);
app.use('/problem', problemRouter);
app.use(express.static('public'));

app.listen(5000, _=>console.log("SERVER STARTED"));