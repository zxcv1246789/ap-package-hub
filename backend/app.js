var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
var LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var user_login_id = null;

app.use(cors());

passport.serializeUser(function(user, done) {
  console.log('serializeUser() 호출됨.');
  console.log("user = " + obj.displayName);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializeUser() 호출됨.');
  console.log("user = " + obj.displayName);
  done(null, obj);
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password',
  session: true,
  passReqToCallback: true
}, function(req, id, password, done) {
  if (id == 'admin' && password == '12341234') {

    return done(null, {
      'user_id': id,
    });
  } else {
    return done(false, null)
  }
}))

passport.use(new GoogleStrategy({
  clientID: "453032720086-b9u2mqngtc3drsdf82t858tts38orf9a.apps.googleusercontent.com",
  clientSecret: "pPARlB0EPucZvbxuZBlIznEk",
  callbackURL: "/api/auth/google/callback"
}, function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
/*
passport.use(new FacebookStrategy({
  clientID: '1700276160051590',
  clientSecret: 'a3b0cc2907fc96877557053402d70b4a',
  callbackURL: 'http://39.119.118.152:3000/auth/facebook/callback',
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
  User.findOne({
    id: profile.id
  }, (err, user) => {
    if (user) {
      return done(err, user);
    } // 회원 정보가 있으면 로그인
    const newUser = new User({ // 없으면 회원 생성
      id: profile.id
    });
    newUser.save((user) => {
      return done(null, user); // 새로운 회원 생성 후 로그인
    });
  });
}));*/

var index = require('./routes/index');
var main = require('./routes/main');
var facebooklogin = require('./routes/facebooklogin');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var server = app.listen(3000, function() {
  console.log("RaspAP server has started on port 3000");
});

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
app.use('/api', facebooklogin);
app.use('/api', main);


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
