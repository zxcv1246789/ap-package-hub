module.exports = function (userid) {
  var express = require('express');
  var router_download = require('./download/download.js');
  var router_upload = require('./upload/upload.js');
  var router_hash = require('./hash/hash.js');
  var router_DB = require('./DB/DB.js');

  var router = express.Router();

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/loginfail');
  };

  router.get('/download', isAuthenticated, function(req, res) {
    var name = req.query.name;
    const file = router_download.download_package();
    res.download(file);
  });
  router.get('/hash', isAuthenticated, function(req, res) {
    var name = req.query.name;
    const file = router_download.download_hash();
    res.download(file);
  });

  router.get('/package', isAuthenticated, function(req, res) {
    const sidemenus = router_download.ap_server_package();
    res.send(sidemenus);
  });

  router.post('/upload', isAuthenticated, function(req, res) {
    router_upload.upload_package(req, res);
    console.log("userid = " + userid);
  });

  router.get('/savelog', isAuthenticated, function(req, res) {
    var username = req.query.username;
    var type = req.query.type;
    var packagename = req.query.packagename;
    console.log("username : " + username);
    console.log("type : " + type);
    console.log("packagename : " + packagename);
    const result = router_DB.insert_download_log(username, type, packagename);
    res.send(result);
  });

  router.get('/download_history', isAuthenticated, function(req, res) {
    router_DB.download_history_get(res);
  });

  router.get('/upload_history', isAuthenticated, function(req, res) {
    router_DB.upload_history_get(res);
  });

  router.get('/download_history_array', isAuthenticated, function(req, res) {
    router_DB.download_history_array(res);
  });

  router.get('/upload_history_array', isAuthenticated, function(req, res) {
    router_DB.upload_history_array(res);
  });
}
