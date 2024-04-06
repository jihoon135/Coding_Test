const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    result = str1 + str2;
    console.log(result);
});

//다른 사람의 풀이

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   console.log(input.join(''));
// });

//join을 써야되는건 알고 있었는데, 이상하게 실행이 안됐었음. 
//타입 정의에 문제가 있었던 걸로 추정됨.