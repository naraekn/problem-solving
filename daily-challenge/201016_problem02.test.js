/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12922
 * 
 * [느낀 점]
 * 1) 아까 써먹은 Array.from을 적용해봤다.
 * 2) String의 repeat을 쓰는 연습도 해봐야겠다. 
 */

function solution1(n) {
  return Array
    .from({length: n}, ((v, i) => i))
    .reduce((a,b) => b%2===0 ? a+'수' : a+'박','');
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(3))
        .toEqual("수박수");  

      expect(
        solution(4))
        .toEqual("수박수박");     
          
  });
});