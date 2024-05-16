function solution(n) {
    var answer = 0;
    if(n%2 === 0){ 
         for(i=0; i<n+1; i+=2) 
        {
            answer += i*i;
        }
    }
    else {
        for(i=1; i<n+1; i+=2)
        { 
            answer += i; 
        }
    }
    return answer;
}

//i++은 i+=1 이다. 
//i+2 라고 코드를 작성했는데, 이 코드는 실제로 
//i 자체의 값이 변하지는 않는다. 유의할 것!