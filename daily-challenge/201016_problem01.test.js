/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [배운 점]
 * Array.from 사용법을 배웠다.
 * Array.from 메서드는 array와 비슷한 형태의 객체({length: 5})나 
 * iterable 한 객체를 Array로 변환시켜준다. (ex: String, Set)
 * 두번째 인자로는 변환된 array에 대한 mapper 함수가 들어갈 수 있다.
 * 
 * [느낀 점]
 * 1) 왜 수학을 해야하는지 배웠다. 다른 분이 진짜 너무 깔끔하게 수학적으로 푼게 인상적이었다.
 * 2) 내가 원하는 수 범위와 값을 갖는 array를 생성하는 방법들이 다양한거같다. 
 * 각각의 장단점이 뭐가 있는지 생각해보면 좋을 거 같다.
 */

function solution1(a, b) {
  return Array
    .from({length: Math.abs(a-b)+1},(_,k)=> a<b ? k+a : k+b)
    .reduce((a,b) => a+b,0);
}
// 다른 사람의 풀이
function solution2(a, b) {
  return (a+b)*(Math.abs(b-a)+1)/2;
}

test('sample', () => {
  [solution1, solution2].forEach(solution => {
      expect(
        solution(3,5))
        .toEqual(12);  

      expect(
        solution(3,3))
        .toEqual(3);     
        
      expect(
        solution(5,3))
        .toEqual(12);         
  });
});