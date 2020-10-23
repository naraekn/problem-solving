/**
 * 백준 - N과 M(8)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15657
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
      dfs(i, stack.length);
      stack.pop();
    }
  }

  dfs(0, 0);

  return result;
}

function bj15657() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("3 1\n4 5 2"))
        .toEqual("2\n4\n5\n"); 

      expect(
        solution("4 2\n9 8 7 1"))
        .toEqual(
`1 1
1 7
1 8
1 9
7 7
7 8
7 9
8 8
8 9
9 9
`); 

      expect(
        solution("4 4\n1231 1232 1233 1234"))
        .toEqual(
`1231 1231 1231 1231
1231 1231 1231 1232
1231 1231 1231 1233
1231 1231 1231 1234
1231 1231 1232 1232
1231 1231 1232 1233
1231 1231 1232 1234
1231 1231 1233 1233
1231 1231 1233 1234
1231 1231 1234 1234
1231 1232 1232 1232
1231 1232 1232 1233
1231 1232 1232 1234
1231 1232 1233 1233
1231 1232 1233 1234
1231 1232 1234 1234
1231 1233 1233 1233
1231 1233 1233 1234
1231 1233 1234 1234
1231 1234 1234 1234
1232 1232 1232 1232
1232 1232 1232 1233
1232 1232 1232 1234
1232 1232 1233 1233
1232 1232 1233 1234
1232 1232 1234 1234
1232 1233 1233 1233
1232 1233 1233 1234
1232 1233 1234 1234
1232 1234 1234 1234
1233 1233 1233 1233
1233 1233 1233 1234
1233 1233 1234 1234
1233 1234 1234 1234
1234 1234 1234 1234
`);      
  });
});