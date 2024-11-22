const express = require('express');
const router = express.Router();
const Contact = require('../model/contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

route.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the Portfolio Server API!',
    status: 'Running',
  });
});


router.post('/query', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new Contact({ name, email, subject, message });
  await contact.save();

  // Send email to admin
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL}>`,  // Correctly formatted from field
    to: process.env.ADMIN_EMAIL,  // Admin's email address
    replyTo: email,  // User's email address for replies
    subject: `User Query: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nRegards,\n${name}`,
    headers: {
      'X-User-Email': email
    }
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Query sent: ' + info.response);
    console.log(info.response);
  });
});

module.exports = router;
