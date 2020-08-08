//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server

var http = require("http");
http
  .createServer(function (request, response) {
    homeRoute(request, response);
    userRoute(request, response);
  })
  .listen(3000);
console.log("Server running at http://<workspace-url>/");

//2. Handle HTTP route GET / and POST / i.e. Home

function homeRoute(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
}

function userRoute(request, response) {
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.write("Header\n");
    response.write(username + "\n");
    response.end("Footer\n");
  }
}
//if url == "/" && GET
//show search
//if url == "/" && POST
//redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
//if url == "/...."
//get json from Treehouse
//on "end"
//show profile
//on "error"
//show error

//4. Function that handles the reading of files and merge in value
// read from file and get a string
// merge values in to string
