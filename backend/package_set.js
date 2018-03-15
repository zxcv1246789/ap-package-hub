module.exports = function(app, isAuthenticated, passport) {

  require('./routes/userlogin.js')(app, isAuthenticated, passport);
  require('./routes/index.js')(app, isAuthenticated, passport);
  require('./routes/main.js')(app, isAuthenticated, passport);

}
