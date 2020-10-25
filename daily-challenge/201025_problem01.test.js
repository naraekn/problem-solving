/**
 * 백준 - N과 M(9)
 * 
 * [링크]
 * https://www.acmicpc.net/problem/15663
 * 
 * 
 * [배운점]
 * DFS를 사용할 때는 불필요한 서칭을 어떻게 걸러낼지 고민해야한다.
 */

// 시간초과
function solution1(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map((v) => parseInt(v));
  const numbers = lines[1].split(' ').map((v) => parseInt(v)).sort((a,b) => a-b);

  const stack = [];
  const result = [];

  function dfs(id, count) {
    if (count === m) {
      const item = `${stack.join(' ')}\n`;
      !result.includes(item) && result.push(item);
      return;
    }

    for (let i = 0; i < n; i++) {
      
      if(i !== id) {
        stack.push(numbers[i]);
        dfs(i, stack.length);
        stack.pop();
      }
    }
  }

  dfs(-1, 0);
  
  return result.join('');
}

// 시간초과
function solution2(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map((v) => parseInt(v));
  const numbers = lines[1].split(' ').map((v) => parseInt(v)).sort((a,b) => a-b);

  const stack = [];
  const result = [];

  function dfs(id, count) {
    if (count === m) {
      result.push(`${stack.join(' ')}\n`);
      return;
    }

    for (let i = 0; i < n; i++) {
      
      if(i !== id) {
        stack.push(numbers[i]);
        dfs(i, stack.length);
        stack.pop();
      }
    }
  }

  dfs(-1, 0);
  
  return [...new Set(result)].join('');
}

// 시간초과
function solution3(input) {
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

    for (let i = 0; i < n; i++) {
      if(i !== id) {
        stack.push(numbers[i]);
        dfs(i, stack.length);
        stack.pop();
      }
    }
  }

  dfs(-1, 0);
  
  return [...new Set(result.split("\n"))].join("\n");
}

// 통과
function solution4(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map((v) => parseInt(v));
  const numbers = lines[1].split(' ').map((v) => parseInt(v)).sort((a,b) => a-b);

  const stack = [];
  let result = '';

  function dfs(ids, count) {
    if (count === m) {
      result += `${stack.join(' ')}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if(!ids.includes(i)) {
        stack.push(numbers[i]);
        dfs([...ids, i], stack.length);
        stack.pop();
      }
    }
  }

  dfs([], 0);
  
  return [...new Set(result.split("\n"))].join("\n");
}

function bj15663() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1, solution2, solution3, solution4].forEach(solution => {
      expect(
        solution("3 1\n4 4 2"))
        .toEqual("2\n4\n"); 

      expect(
        solution("4 2\n9 7 9 1"))
        .toEqual(
`1 7
1 9
7 1
7 9
9 1
9 7
9 9
`); 

      expect(
        solution("4 4\n1 1 1 1"))
        .toEqual('1 1 1 1\n');      
  });
});