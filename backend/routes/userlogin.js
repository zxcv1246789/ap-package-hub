module.exports = function(app, isAuthenticated, passport) {


  app.get('/auth/facebook', passport.authenticate('facebook', {
    authType: 'rerequest',
    scope: ['public_profile', 'email']
  }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/loginfail'
  }), function(req, res) {
    res.redirect('/loginsuccess');
  });
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile']
    }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    function(req, res) {
      // Authenticated successfully
      res.redirect('/');
    });
}
