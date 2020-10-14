/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12906
 * 
 * [느낀 점]
 * reduce로 먼저 짰는데 효율성 테스트를 실패했다. 
 * reduce가 time complexity가 높은 편인건지, loop를 쓸 때보다 속도가 느린거같다.
 * filter로 푼 답안이 가장 깔끔하고 좋은 거 같다.
 */

 // 효율성 테스트 실패
function solution1(arr) {
  return arr.reduce((a, b) => a[a.length-1] === b ? a : [...a, b], []);
}  

// 통과
function solution2(arr) {
  const answer = [arr[0]];
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] !== answer[answer.length-1]){
      answer.push(arr[i]);
    }
  }

  return answer;
} 

// 다른 사람의 풀이
function solution3(arr) {
  return arr.filter((val,index) => val != arr[index+1]);
} 

test('sample', () => {
  [solution1, solution2, solution3].forEach(solution => {
      expect(
        solution([1,1,3,3,0,1,1]))
        .toEqual([1,3,0,1]);   

      expect(
        solution([4,4,4,3,3]))
        .toEqual([4,3]);   
  });
});