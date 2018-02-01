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
  user: 'pi',
  password: 'raspberry',
  database: 'aphubdb',
  insecureAuth: true
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
      if (err) console.error("err : " + err);
      connection.release();
      console.log("content : " + content);
    });
  });

  result = {
    'success': '1'
  }
  res.send(result);
}

exports.download_history_get = function (req, res) {
  pool.getConnection(function(err, connection) {

    var sql = "SELECT Name, DATE_FORMAT(Date, '%Y-%m-%d') Date, Log_content " +
          "from pkg_download_history;";
    if (err) throw err;

    connection.query(sql, function(err, rows) {
      if (err) console.error("err : " + err);
      res.send(rows);
      connection.release();
    });
  });
}
