var express = require('express');
var router_download = require('./download/download.js');
var router_upload = require('./upload/upload.js');
var router_hash = require('./hash/hash.js');
var router_DB = require('./DB/DB.js');
var router = express.Router();

router.get('/download', function(req, res) {
  router_download.download_package(req, res);
});
router.get('/hash', function(req, res) {
  router_download.download_hash(req, res);
});

router.get('/package', function(req, res) {
  router_download.ap_server_package(req, res);
});

router.post('/upload',  function(req, res) {
  router_upload.upload_package(req, res);
});

router.get('/savelog', function(req, res) {

  var username = req.query.username;
  var type = req.query.type;
  var packagename = req.query.packagename;
  console.log("username : " + username);
  console.log("type : " + type);
  console.log("packagename : " + packagename);
  router_DB.insert_download_log(req, res, username, type, packagename);
});

router.get('/download_history', function(req, res) {
  router_DB.download_history_get(req, res);
});
router.get('/upload_history', function(req, res) {
  router_DB.upload_history_get(req, res);
});

module.exports = router;
