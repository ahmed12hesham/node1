var http = require('http');
http.createServer(function(reg ,res){
    res.writeHead(200 ,{'Content/Type','text/plan'});
    res.end('Hello_World');
}).listen(0000);
