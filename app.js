const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require("mysql");
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');




dotenv.config({ path: './.env' });
const db = require('./model/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

db.start.connect(function (err) {
  if (err) {
    console.log('Error connecting to the database');
  } else {
    console.log('Connected to MYSQL');
  }
});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', require('./routes/auth'));

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const r_token = process.env.REFRESH_TOKEN;


async function mainMail(email) {

  const oAut2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
  oAut2Client.setCredentials({ refresh_token: r_token });
  const accessToken = oAut2Client.getAccessToken();
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'oAuth2',
      user: 'fotroxic@gmail.com',
      clientId: client_id,
      clientSecret: client_secret,
      refreshToken: r_token,
      accessToken: accessToken
    }

  });


  let info = transporter.sendMail({
    from: 'YOUTUBE PREMIUM <onuragoo@gmail.com>',
    to: email,
    subject: 'Join to YOUTUBE PREMIUM',
    text: 'DENEMEEEE premium'
  });

};


app.post("/mail", async (req, res, next) => {
  const { ypemail } = req.body;
  try {

    await mainMail(ypemail);


    res.send("Message Successfully Sent!");
  } catch (error) {
    console.log(error);
    res.send("Message Could not be Sent");
  }
});




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
