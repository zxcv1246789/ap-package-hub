const md5File = require('md5-file')

exports.hash_mkfile = function (filename) {
  const hash = md5File.sync( __dirname + '/../../package/' + filename)

  console.log(hash);
}
