const http = require("http");
const PORT = 5000;

//create a server object:
const SERVER = http
  .createServer((req, res) => {
    console.log(`Server Started: http://localhost:${PORT}/`);

    if (req.url === "/") {
      res.end(`
        <h1>Home Page!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/about">back About</a>
        `);
    } else if (req.url === "/about") {
      res.end(`
    <h1>About Page!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    } else {
      res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
  })
  .listen(PORT);
