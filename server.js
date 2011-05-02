var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(process.env.C9_PORT, "0.0.0.0");
    
    console.log("The server has started.");
}

exports.start = start;