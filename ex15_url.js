/**url 내장 모듈을 활용하여 
 * request의 query string을 추출하자.
 */
var http=require('http')
, url=require('url');
//http://localhost:3333/board?idx=100&mode=view
var server=http.createServer(function(req,res){
    var reqUrl=req.url;
    console.log(reqUrl);
    var queryObj=url.parse(reqUrl,true).query;
    console.log(queryObj);
    res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
    var str=`<h1>${JSON.stringify(queryObj)}</h1>`;
        str+='<h1>'+queryObj.idx+"</h1>";
        str+="<br>"+queryObj.mode;
    res.end(str);
}).listen(3333,function(){
    console.log('http://localhost:3333');
})