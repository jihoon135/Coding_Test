function solution(a, b) {
    var num1 = a;
    var num2 = b;
    var ans1 = num1.toString() + num2.toString()
    var ans2 = num2.toString() + num1.toString()
    if(ans1 > ans2) {
    return Number(ans1) 
    }
    else if (ans2 > ans1) {
    return Number(ans2) 
    }
    else {
    return Number(ans1) 
    }
}