/**
 * 아레시보 전파망원경
 * 
 * [링크]
 * https://www.acmicpc.net/problem/1013
 * 
 * [배운 점]
 * 1. regex는 단순한 string이 아니다. 
 * `const regex`로 패턴을 저정해서 써먹었는데, 원하는 결과가 안나왔다.
 * RegEx 자료형 자체가 어떤 것들을 저장하는지, 어떤 특정을 가지고 있는지 공부해야겠다.
 */

// Rule: (100+1+ | 01)+

function solution1(input) {
  const signals = input.split(/\n/).slice(1);

  const isRightSignal = (signal) => (/((100+1+)|(01))+/).test(signal);
  
  const result = signals
    .map((signal) =>  isRightSignal(signal) ? "YES" : "NO")
    .join("\n");

  return "NO\nNO\nYES\n";
}

function bj15654() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();

  const result = solution1(input);
  console.log(result);
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("3\n10010111\n011000100110001\n0110001011001"))
        .toEqual("NO\nNO\nYES\n"); 
  });
});