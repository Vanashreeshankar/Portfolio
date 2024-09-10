const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const bodyParser = require('body-parser');

const contactRoute = require('./route/contacts'); // Make sure the path is correct

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200']
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/contact', contactRoute);

app.use("*", (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
