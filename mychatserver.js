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
    fs.readFile('./public/chat.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
        res.end(data);
    })
})
//웹서버 생성 및 동작
var server=http.createServer(app).listen(3333,function(){
    console.log('http://localhost:3333')
});
//소켓 서버 생성 및 동작
var io=socketio.listen(server);
var users=[];
io.sockets.on('connection',function(socket){
    console.log('클라이언트가 접속함');


    socket.on('room',function(data){
        if(data.cmd==='create'){
        console.log("socket.id==="+socket.id);
        console.log(io.sockets.adapter.rooms);
        //생성된 방들은 io.sockets.adapter.rooms 가 참조하고 있다.
        //1. 해당 방 이름이 이미 존재하는 경우
       var isExist=io.sockets.adapter.rooms[data.roomName];//없으면 undifined
       if(isExist){
        sendResponse(socket,'room','300',data.roomName+"이미 존재하는 방이에요");
       }else{
        //2. 그렇지 않고 새로운 방을 만드는 경우 =>  방 생성 :socket.join('방이름')
        socket.join(data.roomName);//방생성
        ////////////////////////////////////////
        users.push({
            roomName:data.roomName, //방이름
            bangjang:data.nickName, //방장
            ulist:[] //특정 방에 입장한 클라이언트 목록
        }); //배열에 값넣을때 .push()
        var str="["+data.roomName+"]방이 생성되었어요. 방장:["+data.nickName+"]";
        sendResponse(socket,'room','100',str);
    }//------------else----------
}else if(data.cmd==='enter'){
    //방 입장인 경우
    console.log(data.nickName+"님"+data.roomName+"방에 입장함");
    socket.join(data.roomName);
    for(var i=0; i<users.length; i++){
        var u=users[i];
        console.log('u.roomName='+u.roomName);
        if(u.roomName==data.roomName){
            u.ulist.push(data.nickName); //입장한 사람의 닉네임을 해당 방의 ulist배열에 추가
        }
        console.dir('ulist==='+u.ulist);
    }//--------------for--------------------------------
     //방에 입장한 사람들의 목록 가져오기
     var userList=getUserList(data.roomName);
     var sendStr={
         cmd:'ulist',
         users:userList
     }
     //방에 입장한 사람들에게 참여한 user목록을 보내자.
     io.sockets.in(data.roomName).emit('room',sendStr);
     sendResponse(socket,'room','200','#'+data.nickName+"님이 입장했어요");
    }else if(data.cmd=='exit'){
        //방 퇴장시
        //users 의 ulist에서 퇴장하는 사람의 닉네임을 찾아서 삭제 처리
        for(var i=0;i<users.length;i++){
            var u=users[i];
            if(u.roomName==data.roomName){
                var uarr=u.ulist;
                //for루프 이용해서 uarr에 저장된 값 꺼내와서 퇴장하려는 사람의 
                //닉네임과 같으면 해당 배열에서 삭제처리
                //추가 : push(), 삭제 : splice(인덱스번호,count)
                for(var j=0;j<uarr.length;j++){
                    if(uarr[j]==data.nickName){
                        uarr.splice(j,1); //배열에서 삭제처리 
                        break;
                    }//if------
                }

            }//if------------
            console.dir('after exit ulist>>'+u.ulist);
        }//for---------------------
        //방안의 모든 user에게 userList를 다시 전송
        var userList=getUserList(data.roomName);
        var sendStr={
            cmd:'ulist',
            roomName:data.roomName,
            users:userList
        }
        io.sockets.in(data.roomName).emit('room',sendStr);
        var exitMsg="#"+data.nickName+"님이 "+data.roomName+"방에서 퇴장했어요#";
        sendResponse(socket,'room',500,exitMsg);

        //////////////////////////////////////
        socket.leave(data.roomName); //퇴장시 !!!!!!!!!!!!!이것이 핵심★
        //////////////////////////////////////////
    }
   
    })//.on('room') end----------------------

    //클라이언트로부터 메시지가 전송될 경우----------------------
    socket.on('message',function(data){
        console.log(JSON.stringify(data));
        if(data.receiver=='groupchat'){//그룹 챗인 경우
            //방안에 있는 모든 유저들에게 해당 메시지 전송한다.
            //io.sockets.in('방이름').emit('message',데이터)
            var str={
                sender:data.sender,
                type:data.type,
                msg:data.msg,
                //time: time //전송시간
            };
            //////////////////////////////////////////////////
            io.sockets.in(data.roomName).emit('message',str);
            //////////////////////////////////////////////////
            sendResponse(socket,'message',400,'#방['+data.roomName+']의 모든 클라이언트에게 메시지 전송 완료');
        }
    })//.on('message')end-----------------------------------------

})//.on(connection')end

var getUserList=function(room){
    for(var i=0; i<users.length; i++){
        var u=users[i];
        if(u.roomName==room){
            return u.ulist;
        }

    }
}//-------------------------------------


var sendResponse=function(socket,command,code,msg){
    //클에게 응답을 보내는 함수
    var data={cmd:command, code:code, message:msg};
    socket.emit('response',data);
}
