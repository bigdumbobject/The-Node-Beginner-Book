function route(handle, pathname) {
    if (typeof handle[pathname] === "function") {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    };
    
    console.log("About to route a request for " + pathname);
}

exports.route = route;