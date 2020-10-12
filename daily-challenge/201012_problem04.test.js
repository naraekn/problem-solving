/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12903
 * 
 * [배운 점]
 * 1) substring을 처음 써봤다.
 * substring(a,b)을 통해 a이상 b미만 index의 substring을 가져올 수 있다.
 * 이 때, a,b 를 거꾸로 써도 된다.
 * 만약, a가 0보다 작으면 (ex: -1)이면 0으로 바꿔서 환산한다.
 * 2) 몫을 구하는 방법이 다양하다.
 * 나는 이제까지 parseInt를 사용해서 몫을 구했는데,
 * 다른 사람들의 풀이를 보니, Math.floor이나 Math.ceil을 통해 몫을 구하기도 했다.
 */

function solution1(s) {
  const index = parseInt(s.length/2);

  return s.length % 2 === 0 
    ? s.substring(index-1, index+1)
    : s.substring(index, index+1);
}  

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("abcde"))
        .toEqual("c");   

      expect(
        solution("qwer"))
        .toEqual("we");        
  });
});