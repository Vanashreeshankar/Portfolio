const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const bodyParser = require('body-parser');

const contactRoute = require('./route/contacts'); // Make sure the path is correct

const app = express();

app.use(cors({
  origin: 'https://vanashree-portfolio-website.vercel.app', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/contact', contactRoute);

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://vanashree-portfolio-website.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.sendStatus(204); 
});


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
