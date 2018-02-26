var express = require("express");
var util = require('util');
var multer = require('multer');
var fs = require('fs');
const md5File = require('md5-file');
const {
  execSync
} = require('child_process');

var app = express();

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'pi',
  password: 'raspberry',
  database: 'aphubdb',
  insecureAuth: true
});

var i = 0;
var maxFileCount = 2;
var maxFileSize = 3 * 1000 * 1000;
var filePath = '/root/ap-package-hub/package'; //폴더가 이미 만들어져있어야합니다
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, filePath);
  },
  filename: function(req, file, callback) {
    i++;
    callback(null, file.originalname);
    if (maxFileCount == i) {
      i = 0;
    }
  }
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: maxFileSize
  }
}).array('package', maxFileCount);

exports.upload_package = function(req, res) {
  upload(req, res, function(err) {
    //console.log(req.body);
    /*test*/
    console.log('=======================================');
    /*test*/
    console.log(req.files);
    /*test*/
    console.log("=======================================");

    var files = req.files;
    var fileCount = files.length;

    for (var i = 0; i < fileCount; i++) {
      var originalFileNm = files[i].originalname;
      var savedFileNm = files[i].filename; // + i ;//+ '-' + Date.now();
      var fileSize = files[i].size;
      const hash = md5File.sync(__dirname + '/../../package/' + originalFileNm);

      console.log("hash : " + hash);
      fs.writeFileSync(__dirname + "/../../package/" + originalFileNm.replace('.zip', '') + ".md5",
        hash, "utf8",
        function(err, data) {
          result = {
            "success": 1
          };
        })
      console.log("originalFileNm : '%s', savedFileNm : '%s', size : '%s'", originalFileNm, savedFileNm, fileSize);
    }

    if (err) {
      return res.end("Error uploading file.");
    }

    res.end("File is uploaded");

    var username = "admin";
    var type = 1;
    exports.insert_upload_log(req, res, username, type, files[0].originalname.replace('.zip', ''));

  });
}

exports.insert_upload_log = function(req, res, username, type, packagename) {
  var content = "";
  if (type == 1) {
    content += packagename + " upload 완료";
  }
  var data = [username, content];


  pool.getConnection(function(err, connection) {
    var sql = "";
    sql = "INSERT INTO pkg_upload_history(Name, Date, Log_content) VALUES(?, NOW(),?);";
    if (err) throw err;

    connection.query(sql, data, function(err, rows) {
      connection.release();
      console.log("content : " + content);
    });
  });

}
