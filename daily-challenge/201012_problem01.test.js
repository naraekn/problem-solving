/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 * 
 * [배운점]
 * 1) parseInt 사용법에 대하여 정확하게 공부했다. 
 * parseInt는 string을 10진수의 정수로 변환시켜주며, 바꾸려는 string의 진법에 대하여 radix 인자를 통해 명시할 수 있다.
 * n진수를 10진수로 바꿀 때 유용하다.
 * 2) toString의 인자에 대해서 공부하게 됐다.
 * toString의 인자로는 radix 값을 넣어줄 수 있다. 
 * 정수를 string으로 바꿀 때, radix값이 반영된 string으로 만들수 있다.
 * 10진수를 n진수로 바꿀 때 유용하다.
 * 
 * [느낀점]
 * javascript의 문법들을 알고있는 줄 알았는데, "정확하게" 알고있지는 않았다. 
 * 막상 쓰려고 하니까 parseInt도 헷갈렸고, toString 안에 들어가는 인자가 어떤 것인지도 기억이 안났다.
 * 정확하게 공부하는 연습을 해야겠다는 생각이 들었다.
 */

function solution1(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(45))
        .toEqual(7);

      expect(
        solution(125))
        .toEqual(229); 
  });
});