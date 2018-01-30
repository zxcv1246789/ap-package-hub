var fs = require("fs");
var exec = require('child_process').exec,
  child;
const {
  execSync
} = require('child_process');

exports.ap_server_package = function(req, res) {
  var files = fs.readdirSync(__dirname + '/../../package/');
  console.log(files.length);
  var sidemenus = {};
  for (var i = 0; i < files.length; i++) {
    var dir_name = files[i];
    var sidemenu = {};
    var dd = "package _" + String(i + 1);
    if (dir_name.indexOf("md5") != -1) {

    } else {
      sidemenu['pack_name'] = dir_name.replace('.zip', '');
      sidemenus[dd] = sidemenu;
    }
  }
  res.send(sidemenus);
}
