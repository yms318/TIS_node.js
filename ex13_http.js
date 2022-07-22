var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    //fs이용해서 ex03_button.html파일을 읽으세요
    //그 뒤 읽은 파일 데이터를 res를 통해 브라우저에 내보내세요
    //ex02.js파일 참고하기
    fs.readFile("ex03_button.html","utf8",function(err,data){
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        //res.end(data);
    })
}).listen(4444,function(){
    console.log('server started')
    console.log('http://localhost:4444');
})