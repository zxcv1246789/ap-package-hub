var express = require('express');
var path = require('path');
var router = express.Router();
var router_img = require('./img/img.js');
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
  console.log("route -> index.js");
});

router.get('/favicon.ico', function(req, res) {
  const favicon = router_img.get_favicon();
  res.send(favicon);
});

module.exports = router;
