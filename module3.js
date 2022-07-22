//생성자 함수
function Person(name, age){
    this.name=name;
    this.age=age;
}
Person.prototype.info=function(){
    return `이름 : ${this.name}, 나이 : ${this.age}`;
}
module.exports=Person;