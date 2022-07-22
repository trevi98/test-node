const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.write("hello wrold")
    res.end()
});

server.listen(process.env.PORT || 5000);