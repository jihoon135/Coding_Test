function solution(a, b) {
    str1 = a.toString()
    str2 = b.toString()
    
    if(Number(str1 + str2) > 2*a*b || Number(str1 + str2) === 2*a*b)
        {
            return Number(str1 + str2)
        }
    else
        {
            return 2*a*b
        }
}