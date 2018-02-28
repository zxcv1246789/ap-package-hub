var express = require('express');
var path = require('path');
var router = express.Router();
var router_img = require('./img/img.js');
var passport = require('passport');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

router.post('/login_check', passport.authenticate('local-login', {
    failureRedirect: '/',
    failureFlash: true
  }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', isAuthenticated, function(req, res) {
  console.log("로그아웃 확인");
  req.logout();
  res.redirect('/');
});

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
  console.log("route -> index.js");
});

router.get('/favicon.ico', function(req, res) {
  const favicon = router_img.get_favicon();
  res.send(favicon);
});

module.exports = router;
