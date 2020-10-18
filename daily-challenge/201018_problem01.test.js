/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * 
 * [느낀 점]
 * 최대공약수를 구하는 것까지는 스스로 생각했는데, 
 * 최대 공약수로 나눈 사각형들 안에서 대각선을 지나는 사각형의 갯수를 구하는 법은 스스로 생각하지 못했다.
 * 나는 자꾸 규칙을 찾으려고 했는데 문제를 조금 다른 시각으로 바라보고 접근하는 연습이 필요하겠다는 생각이 들었다.
 */

function solution1(w, h) {
  const gcd = (a, b) => {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
  };

  return w * h - w - h + gcd(w,h);
}

// 다른 사람의 풀이 - 삼항연산자가 더 깔끔함

function solution2(w,h){
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  return w * h - (w + h - gcd(w, h));
}

test('sample', () => {
  [solution1, solution2].forEach(solution => {
      expect(
        solution(8, 12))
        .toEqual(80); 
  });
});