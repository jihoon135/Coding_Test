const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    if(n%2 === 0)
    {
        console.log(`${n} is even`)
    }
    else
    {
       console.log(`${n} is odd`)
    }
});


//삼항 연산자를 사용하여 풀이한 사람도 많음
//조건 (삼항) 연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자. 
//앞에서부터 조건문, 물음표(?), 조건문이 참(truthy)일 경우 
//실행할 표현식, 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식이 배치
//비교해서 true면 앞값, false거나 null이면 뒷값
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
