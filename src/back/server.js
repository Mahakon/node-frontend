const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    console.log(request.method, response.method);
    const html = fs.readFileSync("./src/index.html", "utf8");
    response.end(html);
});

console.log("port =  " + process.env.PORT);

server.listen(3000);

console.log("Server is running!");
