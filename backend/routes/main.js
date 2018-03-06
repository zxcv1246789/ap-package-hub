module.exports = function(app, isAuthenticated, passport) {
  var router_download = require('./download/download.js');
  var router_upload = require('./upload/upload.js');
  var router_hash = require('./hash/hash.js');
  var router_DB = require('./DB/DB.js');

  app.get('/api/download', isAuthenticated, function(req, res) {
    var name = req.query.name;
    const file = router_download.download_package();
    res.download(file);
  });
  app.get('/api/hash', isAuthenticated, function(req, res) {
    var name = req.query.name;
    const file = router_download.download_hash();
    res.download(file);
  });

  app.get('/api/package', isAuthenticated, function(req, res) {
    const sidemenus = router_download.ap_server_package();
    res.send(sidemenus);
  });

  app.post('/api/upload', isAuthenticated, function(req, res) {
    router_upload.upload_package(req, res);
  });

  app.get('/api/savelog', isAuthenticated, function(req, res) {
    var username = req.query.username;
    var type = req.query.type;
    var packagename = req.query.packagename;
    console.log("username : " + username);
    console.log("type : " + type);
    console.log("packagename : " + packagename);
    const result = router_DB.insert_download_log(username, type, packagename);
    res.send(result);
  });

  app.get('/api/download_history', isAuthenticated, function(req, res) {
    router_DB.download_history_get(res);
  });

  app.get('/api/upload_history', isAuthenticated, function(req, res) {
    router_DB.upload_history_get(res);
  });

  app.get('/api/download_history_array', isAuthenticated, function(req, res) {
    router_DB.download_history_array(res);
  });

  app.get('/api/upload_history_array', isAuthenticated, function(req, res) {
    router_DB.upload_history_array(res);
  });
}
