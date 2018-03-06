module.exports = function(app, isAuthenticated, passport) {
  var path = require('path');
  var router_img = require('./img/img.js');

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/loginfail');
  };

  app.post('/login_check', passport.authenticate('local-login', {
      failureRedirect: '/loginfail',
      failureFlash: true
    }),
    function(req, res) {
      res.redirect('/loginsuccess');
    });

  app.get('/logout', isAuthenticated, function(req, res) {
    console.log("로그아웃 확인");
    req.logout();
    res.redirect('/loginfail');
  });

  app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/loginfail', function (req, res, next) {
    var data = false;
    res.send(data);
  });
  app.get('/loginsuccess', function (req, res, next) {
    var data = true;
    res.send(data);
  });

  app.get('/favicon.ico', function(req, res) {
    const favicon = router_img.get_favicon();
    res.send(favicon);
  });
}
