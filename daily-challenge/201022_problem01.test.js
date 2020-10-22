/**
 * 평균구하기
 * 
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12944
 */

function solution1(arr) {
  return arr.reduce((a,b) => a+b,0) / arr.length;
}


test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([1,2,3,4]))
        .toEqual(2.5); 

      expect(
        solution([5,5]))
        .toEqual(5); 
  });
});