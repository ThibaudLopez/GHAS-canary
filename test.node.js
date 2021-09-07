var tainted = process.argv[2];

// 1
const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200);
  tainted = req.url + process.argv[2];
  res.end(tainted);
}
const server = http.createServer(requestListener);
server.listen(8080);

// 2
console.log(tainted);

// 3
const { exec } = require("child_process");
exec(tainted);

// 4
fs = require('fs');
var s = fs.readFileSync(tainted, "utf8");
console.log(s);
