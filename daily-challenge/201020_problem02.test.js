/**
 * 백준 - N과 M(2)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15650
 */

function solution1(input) {
  const [n, m] = input.split(' ').map((v) => parseInt(v));
  const stack = [];
  
  let result = '';

  function dfs(id, count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = id; i <= n; i++) {
      if(!stack.includes(i)) {
        stack.push(i);
        dfs(i+1, stack.length);
        stack.pop();
      }  
    }
  }

  dfs(1, 0);

  return result;
}

function bj15650() {
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
        .toEqual("1 2\n1 3\n1 4\n2 3\n2 4\n3 4\n"); 

      expect(
        solution("4 4"))
        .toEqual("1 2 3 4\n"); 
  });
});