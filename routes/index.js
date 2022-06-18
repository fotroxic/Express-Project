var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
<<<<<<< HEAD
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
=======
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d


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

<<<<<<< HEAD
=======
  console.log("inside");
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d
  console.log(req.user);
  res.render('index', {
    title: 'Onur Ago Express',
    videos: videos,
    user: req.user,
<<<<<<< HEAD

=======
    
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d
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
<<<<<<< HEAD
  res.render('login', { message: message });
=======
  res.render('login', { message:message});
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d
});

router.get('/register', function (req, res, next) {
  let message;
<<<<<<< HEAD
  res.render('register', { message: message });
=======
  res.render('register', {message:message});
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d
});






<<<<<<< HEAD



=======
>>>>>>> 2587794b1026589b9acf5d85b2913fd2ef16a68d
module.exports = router;
