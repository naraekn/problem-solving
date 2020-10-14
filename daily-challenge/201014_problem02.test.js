/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [느낀 점]
 * 정규표현식을 공부하고 자야겠다.
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

test('sample', () => {
  [solution1, solution2].forEach(solution => {
      expect(
        solution("01033334444"))
        .toEqual("*******4444");   

      expect(
        solution("027778888"))
        .toEqual("*****8888");   
  });
});