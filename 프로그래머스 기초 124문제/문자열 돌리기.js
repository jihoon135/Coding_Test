const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
     str = input[0];
     [...str].forEach(a => console.log(a))
});

//인터넷 참고하면서 풀었음
//for문으로 각 자리에 있는 문자열을 출력하는 것까진 접근 했는데,
//forEach를 이용할 생각은 못했다... 

//[...str]는 스프레드 문법(Spread Syntax)을 사용해 
//str 문자열의 각 문자를 배열의 요소로 분리함.
//예를 들어, str이 "hello"라면, [...str]는 
//['h', 'e', 'l', 'l', 'o']와 같이 각 문자를 개별 요소로 하는 배열을 생성

//forEach은 배열을 순회하는 메서드로, 배열에서만 가능. 그래서 위에서 스프레트 문법을
//이용해 받은 input을 한 글자씩 분리하여 생성된 배열에 넣은 것임.
//a는 함수의 인자값으로 생각하면 된다. forEach 메서드 내에는 반드시 함수가 전달되어야 함.