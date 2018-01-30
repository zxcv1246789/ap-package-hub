module.exports = function(app, fs, url) {

  var router_download = require('./download/download.js');
  var router_upload = require('./upload/upload.js');
  var router_hash = require('./hash/hash.js');
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  app.get('/download', function(req, res) {
    var name = req.query.name;

    var file = __dirname + '/../package/' + name + '.zip';

    res.download(file); // Set disposition and send it.
  });

  app.get('/package', function(req, res) {
    router_download.ap_server_package(req, res);
  });

  app.post('/upload',  function(req, res) {
    router_upload.upload_package(req, res);
  });


}
