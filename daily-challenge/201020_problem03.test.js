/**
 * 백준 - N과 M(3)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15651
 */

function solution1(input) {
  const [n, m] = input.split(' ').map((v) => parseInt(v));
  const stack = [];
  
  let result = '';

  function dfs(count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = 1; i <= n; i++) {
      stack.push(i);
      dfs(stack.length);
      stack.pop();
    }
  }

  dfs(0);

  return result;
}

function bj15651() {
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
        .toEqual("1 1\n1 2\n1 3\n1 4\n2 1\n2 2\n2 3\n2 4\n3 1\n3 2\n3 3\n3 4\n4 1\n4 2\n4 3\n4 4\n"); 
  });
});