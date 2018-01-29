module.exports = function(app, fs, url) {

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  app.get('/download', function(req, res) {
    var name = req.query.name;

    var file = __dirname + '/../package/' + name + '.zip';

    res.download(file); // Set disposition and send it.
  });
}
