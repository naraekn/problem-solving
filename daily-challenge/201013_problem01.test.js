/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 * 
 * [느낀점]
 * 자꾸 map, filter, slice 등 함수형 프로그래밍이 되도록 만들려고 하다 보니 이상한데서 필요 이상으로 헤매는 거 같다.
 * 처음에는 실제로 3진법으로 변환해서 이를 변형하는 방법을 찾으려고 했는데 해결책이 찾아지지 않았다.
 * 다른 사람들 풀이를 보니까 아샬님의 코드가 있었다. 
 * 도대체 어떻게 해야 이런 풀이법을 생각해낼 수 있는지 궁금하다.
 */

function solution1(n) {
  const translator = ['4', '1', '2'];
  
  let remainder = 0;  
  let answer = ''; 

  while(n > 0) {
    remainder = n%3;
    n = parseInt(n/3);  

    if(remainder === 0) {
      n = n - 1;  
    }
    answer = translator[remainder] + answer;
  }

  return answer;
}  

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(1))
        .toEqual("1");   

      expect(
        solution(2))
        .toEqual("2"); 
        
      expect(
        solution(3))
        .toEqual("4");  
        
      expect(
        solution(4))
        .toEqual("11");        
  });
});