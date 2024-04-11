function solution(my_string, overwrite_string, s) {
    const array = [...my_string]; //받는 인자값으로 배열을 만들겠다.
    array.splice(s, overwrite_string.length, overwrite_string);
    return array.join("");
}


//풀이과정
//처음 받는 인자값은 문자열 형태
//문자열 겹치기를 원활하게 하기 위해 배열로 변경
//splice 메서드를 통해 문자열을 겹친다.
//splice에 대해선 notion에 정리
//배열로 바꾸었던 문자열을 join() 메서드를 통해 다시 문자열로 변경
