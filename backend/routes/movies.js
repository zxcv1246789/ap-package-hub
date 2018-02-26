var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', function (req, res, next) {
  console.log(movies);
  res.send(movies);
  console.log("route -> movies.js -> /");
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var movie = movies.filter(function (movie) {
    return movie.id === id
  });
  res.send(movie);
  console.log("route -> index.js -> /:id");
});

module.exports = router;
