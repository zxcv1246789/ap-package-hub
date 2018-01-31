var fs = require("fs");
var exec = require('child_process').exec,
  child;
const {
  execSync
} = require('child_process');

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'raspberry',
  database: 'aphubdb'
});

exports.insert_download_log = function(req, res, username, type, packagename) {
  var content = "";
  if (type == 1) {
    content += packagename + " download 완료";
  }
  var data = [username, content];

  pool.getConnection(function(err, connection) {
    var sql = "";
    sql = "INSERT INTO pkg_download_history(Name, Date, Log_content) VALUES(?, NOW(),?);";
    if (err) throw err;

    connection.query(sql, data, function(err, rows) {
      connection.release();
      console.log("확인");
    });
  });

  result = {
    'success': '1'
  }
  res.send(result);
}
