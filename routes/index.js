var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');


/* GET home page. */
router.get('/', authController.isLoggedIn, function (req, res, next) {

  let videos = [
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },

    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
    {
      channelIcon: '',
      title: 'Video Title 1',
      channelName: 'Channel Name1',
      views: '',
      date: '',

    },
  ];

  console.log(req.user);
  res.render('index', {
    title: 'Onur Ago Express',
    videos: videos,
    user: req.user,

  });




});

router.get('/about', function (req, res, next) {
  res.render('./pages/about', { title: 'About Us' });
});

router.get('/contact', function (req, res, next) {
  res.render('./pages/contact', { title: 'Contact' });
});





router.get('/login', function (req, res, next) {
  let message;
  res.render('login', { message: message });
});

router.get('/register', function (req, res, next) {
  let message;
  res.render('register', { message: message });
});









module.exports = router;
