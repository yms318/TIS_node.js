var obj=require('./module');
//require('모듈의 파일명')
/*
확장자 .js는 생략해도 된다.
require를 하면 먼저 module.js를 찾는다.
만약 해당 파일이 없다면 module이라는 디렉토리를 찾는다.
해당 디렉토리가 있다면 해당 디렉토리의 index.js파일을 찾는다.
*/
obj.plus(10,20);
obj.minus(300,150);
obj.gop(9,9);