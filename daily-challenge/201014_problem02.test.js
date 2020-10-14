/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [느낀 점]
 * 정규표현식을 공부하고 자야겠다.
 * string에 대한 메서드 "repeat"을 사용하는 것도 좋은 풀이인거같다. 
 * repeat을 사용하는 연습을 해야겠다.
 */

function solution1(phone_number) {
  return phone_number
    .split('')
    .map((value, index) => index<phone_number.length-4 ? '*' : value)
    .join('');
}  

// 다른 사람의 풀이
function solution2(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

function solution3(phone_number){
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

test('sample', () => {
  [solution1, solution2, solution3].forEach(solution => {
      expect(
        solution("01033334444"))
        .toEqual("*******4444");   

      expect(
        solution("027778888"))
        .toEqual("*****8888");   
  });
});