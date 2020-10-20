/**
 * 백준 - N과 M(1)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15649
 * 
 * [풀이 방향]
 * 어제 배운 dfs 코드를 응용했다. 같은 값을 만나는 경우에는 해당 줄기로의 탐색은 중지한다.
 */

function solution1(input) {
  const [n, m] = input.split(' ').map((v) => parseInt(v));
  const stack = [];
  
  let result = '';

  function permutation(count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if(!stack.includes(i)) {
        stack.push(i);
        permutation(stack.length);
        stack.pop();
      }  
    }
  }

  permutation(0, 0);

  return result;
}

function bj15649() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1].forEach(solution => {
      // expect(
      //   solution("3 1"))
      //   .toEqual("1\n2\n3\n"); 

      expect(
        solution("4 2"))
        .toEqual("1 2\n1 3\n1 4\n2 1\n2 3\n2 4\n3 1\n3 2\n3 4\n4 1\n4 2\n4 3\n"); 
  });
});