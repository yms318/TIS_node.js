var http=require('http')
,express=require('express')
,static=require('serve-static')
,path=require('path')
,bodyParser=require('body-parser');
var app=express();
app.use('/', static(path.join(__dirname,'/public')));
////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended:true}));
//true값을 주면 객체 안의 객체를 파싱할 수 있도록 함
////////////////////////////////////////////
var allUser=[
    {no:1, name:'홍길동',tel:'010-1111-1111'},
    {no:2, name:'김길동',tel:'010-2111-1111'},
    {no:3, name:'최길동',tel:'010-3111-1111'},
    {no:4, name:'이길동',tel:'010-4111-1111'}
]


app.get('/',function(req,res){
    var str=`<h1>MyHome</h1>
        <a href="/users">모든 회원 목록</a> |
        <a href="/users/1">특정 회원 정보</a>   
    `;
    res.send(str);
   // res.send("<a href='/login2.html'>로그인</a>");
})
app.get('/users',(req, res)=>{
    var str=`
        <h1>회원 정보</h1>
        <table border='1'>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>연락처</th>
            </tr>
    `;
    for(var i=0;i<allUser.length;i++){
        str+="<tr><td>";
        str+=allUser[i].no+"</td>";
        str+="<td><a href='/users/"+allUser[i].no+"'>"+allUser[i].name+"</a></td>";
        str+="<td>"+allUser[i].tel+"</td>";
    }

    str+=`</table>`;
    res.send(str);
})

app.get('/users/:no',(req, res)=>{
    //요청 path에 따라 다르게 들어오는 파라미터를 :no로 받는다.
    //(1) req.query.파라미터명
    //(2) req.body.파라미터명
    //(3) req.params.파라미터명
    console.log(req.params.no);
    //allUser 반복문 돌면서 해당 회원의 정보만 얻어내어 브라우저에 회원정보 보여주세요
    var findNo=req.params.no;
    var str=findNo+"번 회원정보<br>";
    for(var i=0;i<allUser.length;i++){
        if(parseInt(findNo)===allUser[i].no){
            var user=allUser[i];
            str+="이름: "+user.name+"<br>";
            str+="연락처: "+user.tel+"<br>";
        }
    }
    res.send(str);
})

http.createServer(app).listen(5556,function(){
    console.log('http://localhost:5556');
})





