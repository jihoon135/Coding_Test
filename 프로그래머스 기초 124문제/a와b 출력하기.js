const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${Number(input[0])}` + `\nb = ${Number(input[1])}`);
}); 

//일반적으로 JS는 문자열 자료형을 자주 쓰게 된다.
//보통은 "" 혹은 ''로 감싸준다. 
//여기서 변수를 문자열에 포함 시키려면 백틱을 사용하고, 변수나 함수 이름 앞에 $를 붙이고
//중괄호 '{}' 로 감싸주면 된다.

//ref: https://developerjm.tistory.com/25