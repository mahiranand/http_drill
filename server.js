const http = require("http");
const uuid = require("uuid");

const server = http.createServer((req, res) => {
  const url = req.url.split("/");
  if (req.method == "GET") {
    if (url.length == 2 && url[0] == "" && url[1] == "") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello this is mahir");
      res.end();
    } else if (url.length == 2 && url[1] == "html") {
      res.writeHead(200, { Content_type: "text/html" });
      res.write(`<!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
              <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
              <p> - Martin Fowler</p>
        
          </body>
        </html>`);
      res.end();
    } else if (url.length == 2 && url[1] == "json") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          slideshow: {
            author: "Yours Truly",
            date: "date of publication",
            slides: [
              {
                title: "Wake up to WonderWidgets!",
                type: "all",
              },
              {
                items: [
                  "Why <em>WonderWidgets</em> are great",
                  "Who <em>buys</em> WonderWidgets",
                ],
                title: "Overview",
                type: "all",
              },
            ],
            title: "Sample Slide Show",
          },
        })
      );
      res.end();
    } else if (url.length == 2 && url[1] == "uuid") {
      res.writeHead(200, { Content_type: "application/json" });
      res.write(JSON.stringify({ uudi: uuid.v4() }));
      res.end();
    } else if (url.length == 3 && url[1] == "status") {
      res.writeHead(url[2], { "Content-Type": "text/plain" });
      res.write("This is response page with different status code");
      res.end();
    } else if (url.length == 3 && url[1] == "delay") {
      setTimeout(() => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("This will come after some delay");
        res.end();
      }, url[2] * 1000);
    } else {
      res.writeHead(404);
      res.write("Page Not Found");
      res.end();
    }
  }
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
