var http=require('http')
, fs=require('fs')
, path=require('path')
, static=require('serve-static')
, express=require('express')
, socketio=require('socket.io');
//npm i socket.io --s

var app=express();
app.use("/",static(path.join(__dirname,'public')))
app.get("/",function(req,res){
    fs.readFile('./public/mychat3.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        res.end(data);
    })
}) //get방식의 요청이 오면 

var server=http.createServer(app).listen(3333,function(){
    console.log('http://localhost:3333')
});

//소켓 서버 생성
var io=socketio.listen(server);
var uid=0;
io.sockets.on('connection',function(socket){
    console.log("클이 접속함");
    socket.on('hello',function(data){
        console.log("from client>>"+data);
        //private방식 : 특정인에게만 보내는 방식
        //특정인과 연결된 socket으로부터 id를 받는다.
        uid=socket.id;
        io.sockets.to(uid).emit('sendOne',data);

        //[4] 특정 방 안에 있는 클에게 보낼 땐
        //io.sockets.in('방이름').emit()
    })
})