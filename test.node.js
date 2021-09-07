// 1
const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(req.url);
}
const server = http.createServer(requestListener);
server.listen(8080);

var tainted = req.url + process.argv[2];

// 2
console.log(tainted);

// 3
const { exec } = require("child_process");
exec(tainted);

// 4
fs = require('fs');
fs.readFileSync(tainted);
