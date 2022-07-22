var http=require('http'),
    fs=require('fs'),
    url=require('url');

    /**
     * request의 속성
     * [1] method: 요청방식
     * [2] url : 요청url
     * [3] headers : 요청 메시지 헤더
     * [4] httpVersion : http버전
     */

     var server=http.createServer(function(req,res){
        let meth=req.method;
        let path=req.url; 
        let hds=req.headers;
        console.log('요청방식 : '+meth);
        console.log('요청url : '+path);
        console.log('요청헤더 : '+hds['accept-language']);
        console.log("=============================");
        //console.dir(hds);
        if(path=='/'){
            res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
            res.write("<h1>Index페이지</h1>");
            res.write("<a href='/login'>로그인</a>");
            res.write("<a href='/join'>회원가입</a>");
            res.end();
        }else if(path=='/login'){
            //fs이용해서 login.html보여주기
            fs.readFile('login.html','utf8',function(err,data){
                if(err) throw err;
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            })
        }else if(path=='/join'){
            //fs이용해서 join.html보여주기
            fs.readFile('join.html','utf8',function(err,data){
                if(err) throw err;
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            })
        }
     });

     server.listen(3333,function(){
         console.log('http://localhost:3333');
     });