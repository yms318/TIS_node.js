//express모듈(외장모듈)을 사용해보자.
//npm install express --save
//npm i express -s
//express모듈을 위 명령어로 설치 해야 함
//:http모듈 보다 더 많은 기능을 가짐
var http=require('http')
, express=require('express')
, path=require('path')
, static=require('serve-static');

var app=express(); //express객체 생성

//미들웨어1
app.use(function(req, res,next){
    console.log('1. 미들웨어에서 요청 처리...');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1> Hello Express</h1>");
    next();
})
app.use(function(req,res,next){
    console.log('2. 미들에워에서 요청처리');
    req.user='Hong';
    next();
})
app.use(function(req,res,next){
    console.log('3. 미들웨어 요청 처리');
    res.write("<h2 style='color:red'> I am "+req.user+"</h2");
    res.end();
});
//Express server시작
http.createServer(app).listen(5555,function(){
    console.log('Express Server Started at 5555 port');
})

