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
    fs.readFile('./public/mychat.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        res.end(data);
    })
}) //get방식의 요청이 오면 

var server=http.createServer(app).listen(3333,function(){
    console.log('http://localhost:3333')
});

//소켓 서버 생성
var io=socketio.listen(server);
io.sockets.on('connection',function(socket){
    console.log('connection>>클라이언트가 접속해써요')
    socket.on('hello',function(data){
        console.log('#클라이언트가 보낸 메시지 : '+data);
        //[1] public 통신.. 접속해 있는 모든 클라이언트에게 받은 메시지를 메아리로 보내보자
        //  io.sockets.emit()
        io.sockets.emit('sendAll',data);
        //[2] broadcast 통신 (나를 제외한 모든 접속자에게 메시지를 보낸다.)
        //  socket.broadcast.emit()을 이용해 전송
        //[3] private 통신 (특정인에게만 메시지를 보낸다.)
        //  io.sockets.to('특정인').emit()
    })
})