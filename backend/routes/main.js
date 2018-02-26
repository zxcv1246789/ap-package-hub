module.exports = function(app) {

  var path = require('path');
  var movies = require('../movies.json');
  var router_download = require('./download/download.js');
  var router_upload = require('./upload/upload.js');
  var router_hash = require('./hash/hash.js');
  var router_DB = require('./DB/DB.js');

  app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
    console.log("route -> index.js");
  });

  app.get('/movie', function (req, res, next) {
    console.log(movies);
    res.send(movies);
    console.log("route -> movies.js -> /");
  });

  app.get('/movie/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var movie = movies.filter(function (movie) {
      return movie.id === id
    });
    res.send(movie);
    console.log("route -> index.js -> /:id");
  });

  app.get('/download', function(req, res) {
    router_download.download_package(req, res);
  });
  app.get('/hash', function(req, res) {
    router_download.download_hash(req, res);
  });

  app.get('/package', function(req, res) {
    router_download.ap_server_package(req, res);
  });

  app.post('/upload',  function(req, res) {
    router_upload.upload_package(req, res);
  });

  app.get('/savelog', function(req, res) {

    var username = req.query.username;
    var type = req.query.type;
    var packagename = req.query.packagename;
    console.log("username : " + username);
    console.log("type : " + type);
    console.log("packagename : " + packagename);
    router_DB.insert_download_log(req, res, username, type, packagename);
  });

  app.get('/download_history', function(req, res) {
    router_DB.download_history_get(req, res);
  });
  app.get('/upload_history', function(req, res) {
    router_DB.upload_history_get(req, res);
  });
}
