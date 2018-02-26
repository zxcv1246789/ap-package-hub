var fs = require("fs");
var exec = require('child_process').exec,
  child;
const {
  execSync
} = require('child_process');

exports.download_package = function(req, res) {
  var name = req.query.name;

  var file = __dirname + '/../../package/' + name + '.zip';

  res.download(file); // Set disposition and send it.
}

exports.download_hash = function(req, res) {
  var name = req.query.name;

  var file = __dirname + '/../../package/' + name + '.md5';

  res.download(file); // Set disposition and send it.
}

exports.ap_server_package = function(req, res) {
  var files = fs.readdirSync(__dirname + '/../../package/');
  console.log("파일의 총 개수(hash파일 포함) : " + files.length);
  var sidemenus = {};
  for (var i = 0; i < files.length; i++) {
    var dir_name = files[i];
    var sidemenu = {};
    var dd = "package _" + String(i + 1);
    if (dir_name.indexOf(".zip") != -1) {
      sidemenu['pack_name'] = dir_name.replace('.zip', '');
      sidemenus[dd] = sidemenu;
    } else {
    }
  }
  res.send(sidemenus);
}
