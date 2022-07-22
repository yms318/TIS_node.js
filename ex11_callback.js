function plus(a,b, callback){
    var result=a+b;
    callback(result);
    var history=function(){
        return a+"+"+b+"="+result;
    }
    return history;
}

var ccc=plus(10,20,function(res){
    console.log("결과값 : res="+res);
})
console.log(ccc());