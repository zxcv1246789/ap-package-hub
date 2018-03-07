var express = require('express');
var router = express.Router();
var passport = require('passport');
var cors = require('cors');

router.get('/auth/facebook', cors(), passport.authenticate('facebook', {
  authType: 'rerequest',
  scope: ['public_profile', 'email']
}));
router.get('/auth/facebook/callback', cors(), passport.authenticate('facebook', {
  failureRedirect: '/loginfail'
}), function(req, res) {
  res.redirect('/loginsuccess');
});

module.exports = router;
