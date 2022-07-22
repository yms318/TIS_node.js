//process 전역 객체
//process의 속성 : argv
console.log('process의 argv속성의 파라미터 수: %d', process.argv.length);

process.argv.forEach(function(val, i){
    console.log(i+": "+val);
})

console.log("OS환경변수 값: "+process.env['OS']);
//console.dir(process.env);

//프로그램이 종료될 때 이벤트를 감지하여 핸들러 함수를 실행함
process.on('exit', function(){
    console.log("Process Exit...Bye Bye");
})
/**node에서 이벤트 처리하기
 * (1) addListener('이벤트',함수)
 * (2) on('이벤트', 함수)
 *
 * node에서 이벤트 발생시키기 
 * (1) emit('이벤트명')
 */
process.on('myevent', function(){
    console.log('myevent가 발생했군요~~');
})

process.emit('myevent');



