module.exports = function(app, fs, url) {

  var router_download = require('./download/download.js');
  var router_upload = require('./upload/upload.js');
  var router_hash = require('./hash/hash.js');
  var router_DB = require('./DB/DB.js');

  app.get('/', function(req, res) {
    res.render('index.html');
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

  app.post('/savelog', function(req, res) {

    var username = req.query.username;
    var type = req.query.type;
    var packagename = req.query.packagename;

    router_DB.insert_download_log(req, res, username, type, packagename);
  });
}
