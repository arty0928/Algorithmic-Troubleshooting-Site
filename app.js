const express = require('express');
const indexRouter = require('./routes/index');
const problemRouter = require('./routes/problem');

const app = express();

app.use('/', indexRouter);
app.use('/problem', problemRouter);
app.use(express.static('public'));

app.listen(5000, _=>console.log("SERVER STARTED"));