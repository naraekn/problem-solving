/**
 * 백준 - N과 M(10)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15664
 * 
 */

function solution1(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map((v) => parseInt(v));
  const numbers = lines[1].split(' ').map((v) => parseInt(v)).sort((a,b) => a-b);

  const stack = [];
  let result = '';

  function dfs(id, count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = id; i < n; i++) {
      stack.push(numbers[i]);
      dfs(i+1, stack.length);
      stack.pop();
    }
  }

  dfs(0, 0);
  
  return [...new Set(result.split("\n"))].join("\n");
}

function bj15664() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("3 1\n4 4 2"))
        .toEqual("2\n4\n"); 

      expect(
        solution("4 2\n9 7 9 1"))
        .toEqual(
`1 7
1 9
7 9
9 9
`); 

      expect(
        solution("4 4\n1 1 2 2"))
        .toEqual('1 1 2 2\n');      
  });
});