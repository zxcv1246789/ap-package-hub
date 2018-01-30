var express = require("express");
var util = require('util');
var multer = require('multer');
var fs = require('fs');

var app = express();

var i = 0;
var maxFileCount = 2;
var maxFileSize = 3 * 1000 * 1000;
var filePath = '/root/fileupload';
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, filePath);
  },
  filename: function(req, file, callback) {
    i++;
    callback(null, file.fieldname + i + '-' + Date.now());

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
}).array('userPhoto', maxFileCount);

exports.upload_package = function (req, res) {
  upload(req, res, function(err) {
    //console.log(req.body);
    var fileId = req.body.fileId;
    var fileDesc = req.body.fileDesc;
    console.log("fileId : '%s', fileDesc : '%s'", fileId, fileDesc);

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
      console.log("originalFileNm : '%s', savedFileNm : '%s', size : '%s'", originalFileNm, savedFileNm, fileSize);
    }

    if (err) {
      return res.end("Error uploading file.");
    }

    res.end("File is uploaded");
  });
}
