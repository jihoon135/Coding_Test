const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var first_num = input[0];
    var second_num = input[1];
    var result = Number(input[0]) + Number(input[1]);
    console.log(`${first_num} + ${second_num} = ${result}`);
});


//다른 사람 풀이

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     const a = Number(input[0]);
//     const b = Number(input[1]);
//     console.log(`${a} + ${b} = ${a+b}`) //좀 더 간단하게 표현할 수 있는 방법인 듯
// });