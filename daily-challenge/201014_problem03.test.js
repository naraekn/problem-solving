/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [느낀점]
 * Math.min, Math.max에 string이 들어가도 되는지 처음알았다.
 */

function solution1(s) {
  const arr = s.split(' ').map((value) => parseInt(value));

  return [Math.min(...arr), Math.max(...arr)].join(' ');
}

// 다른 사람 풀이
function solution2(s) {
  const arr = s.split(' ');

  console.log(arr);

  return Math.min(...arr)+' '+Math.max(...arr);
}

test('sample', () => {
  [solution1, solution2].forEach(solution => {
      expect(
        solution("1 2 3 4"))
        .toEqual("1 4");   

      expect(
        solution("-1 -2 -3 -4"))
        .toEqual("-4 -1");   

      expect(
        solution("-1 -1"))
        .toEqual("-1 -1");   
  });
});