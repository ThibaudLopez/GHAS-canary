var express = require('express');
var logger = require('fastlog')();

var app = express();
var port = 8080;

app.get('/', (req, res) => {
  var exploit = req.url;
  var err = new Error(exploit);
  logger.error(err);
	res.status(404).jsonp({ error: exploit, message: exploit, foo: exploit });
	res.send(exploit);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
