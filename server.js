const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    const html = fs.readFileSync("./index.html", "utf8");
    response.end(html);
});

console.log("port =  " + process.env.PORT);

server.listen(process.env.PORT || 3000);

console.log("Server is running!");
