// 1
const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(req.url);
}
const server = http.createServer(requestListener);
server.listen(8080);

// 2
console.log(process.argv[2]);

// 3
const { exec } = require("child_process");
exec(process.argv[2]);

// 4
fs = require('fs');
fs.readFileSync(process.argv[2]);
