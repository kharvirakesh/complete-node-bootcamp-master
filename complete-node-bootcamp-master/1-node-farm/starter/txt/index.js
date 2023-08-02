const fs = require("fs");
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!");

  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is HomePage");
  } else if (pathname === "/project") {
    res.end("This is Product Page");
  } else {
    res.end("page not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}/`);
});
