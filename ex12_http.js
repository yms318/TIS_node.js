/**
 * http모듈
 * - http웹서버와 관련된 기능을 담은 모듈
 *   http모듈의 createServer()메소드를 사용하여 서버 객체를 생성
 */
var http=require('http');
var server=http.createServer();

//클라이언트가 요청할 때
server.on('request', function(code){
    console.log("요청이 왔어요: "+(code));
    //console.dir(code);
});

//클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트
server.on('connection', function(code){
    console.log('클라이언트가 접속했어요:'+code)
})

//서버가 종료할 때 호출됨
server.on('close',function(code){
    console.log('서버가 종료되어요')
})

server.listen(5555,function(){
    console.log('server started...at http://localhost:5555');
})