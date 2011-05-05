var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");
    
    var content = "empty";
    
    exec("find /",
        { timeout: 10000, maxBuffer: 20000*1024 }, 
        function (error, stdout, stderr) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(stdout);
            response.end();
    });
    
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;