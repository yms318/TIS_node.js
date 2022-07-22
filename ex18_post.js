var http=require('http')
,express=require('express')
,static=require('serve-static')
,path=require('path')
,bodyParser=require('body-parser');
//post방식일 때 필요한 모듈
//npm i body-parser --s

var app=express();
app.use('/', static(path.join(__dirname,'/public')));
////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended:true}));
//true값을 주면 객체 안의 객체를 파싱할 수 있도록 함
////////////////////////////////////////////
app.get('/',function(req,res){
    res.send("<h1>My Homepage</h1>");
   // res.send("<a href='/login2.html'>로그인</a>");
})

//post()함수 이용해서 /loginEnd
app.post('/loginEnd', function(req, res){
    var dummyUser={
        id:'admin',
        pw:'tiger'
    }
    //var id=req.query.uid; //get방식일 때
    //var pw=req.query.upw;
    //post방식일 경우 데이터가 request의 entity body에 포함되어 가므로
    //req.body 를 이용한다.
    var id=req.body.uid;
    var pw=req.body.upw;

    var str=`
       <h1>post방식일 때 요청 처리</h1>
       <h2>아이디: ${id}</h2>
       <h2>비밀번호: ${pw} </h2>
    `
   // res.send(str);
    if(id===dummyUser.id){
        if(pw!==dummyUser.pw){
            res.send('<h3>비밀번호가 일치하지 않아요</h3>');
        }else{
            //res.send(`<h3>${id}님 환영합니다.</h3>`);
            res.redirect('/');
            //redirect방식으로 홈페이지로 이동
        }
    }else{
        res.send("<h3>존재하지 않는 아이디입니다</h3>");
    }

})


http.createServer(app).listen(5555,function(){
    console.log('http://localhost:5555');
})
