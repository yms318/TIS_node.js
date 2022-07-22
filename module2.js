/*
모듈 안에서 인스턴스 객체를 만들어 할당하느 경우
=> module.exports=객체;
이 때 객체는 하나만 내보낼 수 있다.
*/
var user={
    id:'kim',
    name:'김길동',
    info:function(){
        console.log(`아이디:${this.id}`);
        console.log(`이  름:${this.name}`);
    }
};
module.exports=user;