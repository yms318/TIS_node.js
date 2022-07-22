/** 
 * 전역객체
 * [1] console : 콘솔창에 결과를 보여주는 객체
 * [2] process : 프로세스 실행에 대한 정보를 다루는 객체
 * [3] exports : 모듈을 다루는 객체
 * 전역변수
 * [1] __filename : 현재 실행 중인 파일 이름
 * [2] __dirname : 현재 실행 중인 디렉토리명
 *  
 * console의 주요 메소드
 * (1) log()
 * (2) dir(object) : 객체가 가지는 속성들을 출력해준다.
 * (3) time(id) : 실행시간을 측정하기 위한 시작 시간을 기록함
 * (4) timeEnd(id): 실행시간을 측정하기 이한 끝 시간을 기록함
*/
console.log("숫자 출력하기: %d",500);
console.log("문자열 출력하기: %s", "Hi Node Js~~~");
console.log("JSON객체 출력하기: %j", {name:'홍길동', age:22});

var obj={name:'김학생', cname:'웹개발자반',subject:'NodeJs'};
console.log(obj);
console.dir(obj);

var result=0;
console.time('sum');
for(var i=1;i<=100000;i++){
    result+=i;
}
console.timeEnd('sum');

console.log('1부터 100000까지의 합: '+result);

console.log('현재 실행 중인 파일명: %s', __filename);
console.log('현재 실행 중인 파일의 상위 디렉토리 경로: %s', __dirname);