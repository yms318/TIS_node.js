/**
 * fs모듈 (File System모듈)을 이용하여 파일을 읽어보자.
 *  1. 동기방식으로 파일을 읽는 경우
 *      readFileSync()함수
 *  2. 비동기방식으로 파일을 읽는 경우
 *      readFile()함수
 * */
var fs=require('fs');
//1. 동기방식으로 읽을 경우
// console.log("1.----------------------");
// var data=fs.readFileSync("readme.txt","utf8");
// console.log(data);
// console.log("2.----------------------");

//2. 비동기방식으로 읽을 경우
console.log("1.----------------------");
var data=fs.readFile("readme.txt","utf8",function(err,data){
    //해당 파일을 찾아 읽으면 콜백함수의 매개변수 data로 파일 내용을 전달
    //파일이 없다면 에러를 발생시킴 => err로 전환
    if(err) throw err;
    console.log("=====읽은 파일 내용=====");
    console.log(data);
    console.log("========================")
})
console.log("2.----------------------");