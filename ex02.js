var http = require('http'); //http모듈을 사용하겠다고 표시

var server=http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Hello Node JS</h1>");

}).listen(3333, function(){
    console.log('server started http://localhost:3333');
});