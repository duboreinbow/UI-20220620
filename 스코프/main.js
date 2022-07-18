let ename ="scott";
//자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다. 
// 함수선언 방법 2가지가 있다.
// 함수문
// 함수식
function methodA(){
    let i = 5;
    console.log(ename);
    console.log(i);
//insert here - before
    innerMethod();
    // 함수문
    function innerMethod(){
        let j = 10;
        console.log(i);
    }
//insert here - afte
    //methodB();
    //함수식일때 before
    //함수식
const methodB = function(){
    console.log('methodB');
}
//함수식일때 after
methodB();

}


methodA();
console.log(i);

/**
 * 글로벌 스코프 - member variable, global variable 전변
 * : 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐
 * 함수 스코프 - 함수안에서 정의됨 main.ival, sub.ival
 * : 함수가 만들어 졌따고 해서 스코프가 생긴다 | 아닌데
 * 블록스코프
 * : for(int i;i!=1;)
 * inint() -> service() -> destroy()
 */
