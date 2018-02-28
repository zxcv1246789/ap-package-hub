var fs = require('fs');

exports.get_favicon = function() {
  var favicon = fs.readFileSync(__dirname + "/favicon.ico");
  return favicon;
}
