/**
 * 스터디 문제1
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15652
 * 
 * [배운 점]
 * 1. 이제까지 내가 순열, 조합의 관점에서 접근했던 문제들을 dfs로 풀 수 있다는 것을 배웠다.
 * 2. dfs가 javascript를 통해 어떻게 구현되는지를 배웠고 이해할 수 있었다.
 * 
 * [느낀 점]
 * 1. 다른 사람들의 풀이를 통해 배우는 것이 중요한 거 같다.
 * 2. 알고리즘을 이해하고 풀기보다 지금 당장은 다양한 코드를 보고 이해하고 소화시키는 훈련도 중요한 거 같다.
 * 3. 내일은 dfs 문제를 하나 더 풀어보면 좋을 거 같다. 
 */

function solution1(input) {
  const [n, m] = input.split(' ').map((v) => parseInt(v));
  const combination = [];
  
  let result = '';

  function dfs(id, count) {
    if (count === m) {
      result += `${combination.join(' ')}\n`;
      return;
    }

    for (let i = id; i < n; i++) {
      combination.push(i + 1);
      dfs(i, combination.length);
      combination.pop();
    }
  }

  dfs(0, 0);

  return result;
}

function bj15652() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("3 1"))
        .toEqual("1\n2\n3\n"); 

      expect(
        solution("4 2"))
        .toEqual("1 1\n1 2\n1 3\n1 4\n2 2\n2 3\n2 4\n3 3\n3 4\n4 4\n"); 
      
      expect(
        solution("3 3"))
        .toEqual("1 1 1\n1 1 2\n1 1 3\n1 2 2\n1 2 3\n1 3 3\n2 2 2\n2 2 3\n2 3 3\n3 3 3\n");
  });
});