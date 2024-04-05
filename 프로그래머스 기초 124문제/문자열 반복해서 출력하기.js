const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let input = []; 
var temp = ''; //처음에 초기화를 안 해주면, undefined가 출력되기 때문에, 초기화 해줘야 한다.

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0]; 
    n = Number(input[1]); 
    for(i=0; i<n; i++)
    {
        temp += str;
    }
    console.log(temp);   
});


//아래는 다른 사람의 풀이


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     str = input[0];
//     n = Number(input[1]);
//     console.log(str.repeat(n)); 
// });

//repeat 메서드는 매개변수로 받는 숫자만큼 반복해서 문자열을 붙여 새로운 문자열을 만든다.