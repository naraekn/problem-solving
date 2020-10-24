/**
 * 행렬의 덧셈
 * 
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12950
 */

function solution1(arr1, arr2) {
  return arr1.map((value, index) => value.map((v, i) => v+arr2[index][i]));
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([[1,2],[2,3]], [[3,4],[5,6]]))
        .toEqual([[4,6],[7,9]]); 

      expect(
        solution([[1],[2]], [[3],[4]]))
        .toEqual([[4],[6]]);  
  });
});