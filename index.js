const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('hello')
});

server.listen(process.env.PORT || 5000);