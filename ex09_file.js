var fs=require('fs');
/**
 * writeFile('파일명',data[옵션],콜백함수)
 * : 비동기방식으로 파일에 내용을 쓴다.
 * writeFileSync("파일명",data,[옵션])
 * : 동기방식으로 파일에 내용을 쓴다.
 */
// console.log('1.------------------');
// //result.txt파일에 "Hi NodeJS"라는 내용을 동기방식으로 써보세요
// var data=fs.writeFileSync("result.txt","Hi NodeJS","utf8");
// console.log('result.txt에 쓰기 완료');
// console.log('2.------------------');

console.log('1.--------------------');
fs.writeFile("result.txt","잘가라 nodeJS 뱌뱌ㅠ","utf8",(err)=>{
    if(err){
        console.log('파일쓰기 중 에러 발생 : '+err.message);
        return;
    }
});
console.log('2.--------------------');

//exist/existSync : 파일 존재여부를 체크하는 함수
fs.exists("result.txt",(bool)=>{
    if(bool){
        console.log("파일 있음");
    }else{
        console.log("파일 없음");
    }
})
var b=fs.existsSync('readme.txt');
console.log("파일이 있을까요???=>"+b);