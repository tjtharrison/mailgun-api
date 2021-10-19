const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

// App Routes
var indexRouter = require('./routes/index');

// Set App
const app = express()

// Setup Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// User Routes
app.use('/', indexRouter);

// Launch Express
app.listen(8010, () => {
    console.log('Web Server started on port 8010')
})