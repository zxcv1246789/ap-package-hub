var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/facebook', passport.authenticate('facebook', {
  authType: 'rerequest',
  scope: ['public_profile', 'email']
}));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/loginfail'
}), function(req, res) {
  res.redirect('/loginsuccess');
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    res.redirect('/');
  });


module.exports = router;
