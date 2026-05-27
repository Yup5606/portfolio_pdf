const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "dist");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

http
  .createServer((request, response) => {
    const url = decodeURIComponent(request.url.split("?")[0]);
    const safePath = path.normalize(url).replace(/^(\.\.[/\\])+/, "");
    let filePath = path.join(root, safePath === "/" ? "index.html" : safePath);

    fs.stat(filePath, (statError, stat) => {
      if (statError || !stat.isFile()) {
        filePath = path.join(root, "index.html");
      }

      fs.readFile(filePath, (readError, data) => {
        if (readError) {
          response.writeHead(500);
          response.end("Server error");
          return;
        }

        response.writeHead(200, {
          "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        });
        response.end(data);
      });
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Portfolio site running at http://127.0.0.1:${port}`);
  });
