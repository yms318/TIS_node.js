var http=require('http')
, express=require('express')
, path=require('path')
, static=require('serve-static');
var app=express();

app.use('/', static(path.join(__dirname,'public')));
//public 이라는 디렉토리에 정적인 파일들을 두고
//'/' 경로로 접근하고자 할 때 사용함

app.get('/loginEnd', function(req, res){
    //get방식일 경우 사용자가 입력한 값(uid, upw) 받아오기
    //=>req.query.파라미터명
    var uid=req.query.uid;
    var upw=req.query.upw;
    res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
    var str="<h1>사용자가 보낸 데이터</h1>";
        str+="<h2>아이디:"+uid+"</h2>";
        str+="<h2>비밀번호: "+upw+"</h2>";
    res.end(str);
})

//http://localhost:3333/public/login.html
http.createServer(app).listen(3335,function(){
    console.log('port 3335');
})