var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();
var userid = "";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var index = require('./routes/index.js')(app, isAuthenticated, passport);
var main = require('./routes/main.js')(app, isAuthenticated, passport);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'LeeJinWoo',
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 600000
  } //600000 = 10분
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/api', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

passport.serializeUser(function(user, done) {
  console.log('serializeUser() 호출됨.');
  console.dir(user);

  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializeUser() 호출됨.');
  console.dir(user);
  console.log("userid = " + userid);
  done(null, user);
});

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

passport.use('local-login', new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, id, password, done) {
  if (id == 'admin' && password == '12341234') {
    userid = id;
    return done(null, {
      'user_id': id,
    });
  } else {
    return done(false, null)
  }
}))

module.exports = app;
