module.exports = function(app, isAuthenticated, passport) {
  var path = require('path');
  var router_img = require('./img/img.js');

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

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/loginfail', function(req, res) {
    var data = false;
    res.send(data);
  });
  app.get('/loginsuccess', function(req, res) {
    var data = true;
    res.send(data);
  });

  app.get('/favicon.ico', function(req, res) {
    const favicon = router_img.get_favicon();
    res.send(favicon);
  });

}
