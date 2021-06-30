const express = require('express');
const router = express.Router();
const cors = require('cors');
// const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const loginUser = process.env.LOGIN_USER;
const loginPw = process.env.LOGIN_PW;
const sendToEmail = process.env.SEND_TO_EMAIL;

// Setup server
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use("/", router);

// Force HTTPS and proper routes
if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Listen on port 5000
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// Direct service-worker requests
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js'));
});

// Send payment route
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

// Establish connection with SMTP
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: loginUser,
    pass: loginPw,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Send email route
router.post('/send-contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: sendToEmail,
    subject: `Contact Form Submission - ${subject}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});
