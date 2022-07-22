var obj=require('./module3');

var p=new obj("김사랑",22);
var str=p.info();
console.log(str);

p.showStar=()=>{
    for(var i=0;i<5;i++)
        console.log("*")
}
p.showStar();