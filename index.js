const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   if(req.url == "/"){
        fs.readFile('form.html',{encoding:'utf-8'},(data) => {
            res.write(data);
            res.end();
        })
   }
   else{
        console.log(req);
        fs.writeFile('log.txt',req,{encoding:'utf-8'},()=>{console.log('done')})

   }
});

server.listen(process.env.PORT || 5000);