// 함수
// 함수도 객체이다
// 메소드오버로딩, 오버라이딩 지원없음
// 같은 이름의 함수를 중복정의하지 않음

function hap(a,b){
  const result = a+b;
  return a+b;
}

console.log(hap(1,3));

let lastName = '김';
let firstName = '유신';
let fullNmae = `${lastName} ${firstName}`;

let lastName2 = '이';
let firstName2 = '순신';
let fullNmae2 = `${lastName} ${firstName}`;

function namePrint(firstName, lastName){
  return `${lastName} ${firstName}`;
}

console.log(namePrint(firstName, lastName));
console.log(namePrint(lastName, firstName));
// total 변수도 hap과 동일한 메모리 주소를 갖는다. 
const total = hap;
console.log(hap(2,3));
console.log(total(2,3));
