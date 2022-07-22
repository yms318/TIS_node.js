/*
모듈화하여 내보내는 방법
1. 함수를 할당하는 방법 => exports전역객체에 여러 함수를 등록하여 내보낼 수 있다.
                        => exports.변수=function(){...}
2. 모듈 안에서 인스턴스 객체를 만들어 할당하는 경우
    => module.exports=객체
3. 프로토타입 객체를 할당하는 경우
    => 프로토타입을 정의한 후 module.exports에 할당함
    그러면 이를 가져다 쓰는 파일에서 new 연산자를 사용할 수 있음

*/
exports.plus=function(a, b){
    console.log(a+"+"+b+"="+(a+b));
}
exports.minus=function(a,b){
    console.log(`${a}-${b}=${a-b}`);
}
//화살표 함수(ES6) : 람다식?(익스에선 안먹을 수 있음)
exports.gop=(a,b)=>{
    console.log(`${a}x${b}=${a*b}`);
}
