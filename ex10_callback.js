function plus(a,b){
    var result=a+b;
    return result;
}
var c=plus(10,20);
console.log(c);

//자바스크립트에서는 함수에 함수를 매개변수로 전달할 수 있다.
function calc(a,b,callback){
    var result=a+b;
    callback(result,a,b);
}

calc(5,8,function(res,x,y){
    console.log(x+"+"+y+"="+res);
});
calc(2,7,function(res){
    console.log("2+7의 3배는="+(res*3));
});
//2의 8승 값을 출력해보기
calc(2,8,function(res,x,y){
    console.log("2의 8승 값은="+Math.pow(x,y))
});
