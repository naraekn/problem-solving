/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 *
 * [느낀 점]
 * 나는 이 문제가 "순열"을 활용하면 된다고 생각해서, 
 * 이전에 짜놓은 recursion을 이용한 순열 코드를 붙여 넣어서 풀었다.
 * 다른 사람들의 풀이법을 보니까 nested for를 써서 푸는 경우가 많았다.
 * 어떤 것이 더 효율적이고 좋은 코드인지 모르겠다.
 */

function solution1(numbers) {
  const getPermutations = (arr, r) => {
    const results = [];

    if (r === 1) return arr.map((value) => [value]);
    
    arr.forEach((fixed, id, origin) => {
      const rest = [...origin.slice(0, id), ...origin.slice(id+1)];
      const permutations = getPermutations(rest, r - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached); 
    });
    
    return results; 
  } 

  const allCases = getPermutations(numbers, 2).map(arr => arr[0]+arr[1]);

  const result = [...new Set(allCases)].sort((a,b) => a-b);

  return result;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([2,1,3,4,1]))
        .toEqual([2,3,4,5,6,7]);

      expect(
        solution([5,0,2,7]))
        .toEqual([2,5,7,9,12]); 
  });
});