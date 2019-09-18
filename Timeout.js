const http = require("http");// libraries

const server = http.createServer((req, res) => {//Request Listener
    res.end("Hello Ashfaq   ");
});

server.listen(4242,()=>{
    setTimeout(()=>{
        console.log("Server is running")
    },4*1000);

});