/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 * 
 * [배운 점]
 * javascript의 Date 객체를 써본적이 거의 없었는데, 이번에 사용하면서 배울 기회가 된거같다.
 * 모던 자바스크립트를 다시보면서 공부를 했다.
 *
 * 1) Date 객체 생성 방법에는 세가지가 있다. 
 * new Date() - 현재시간 반환
 * new Date(datestring) - "yyyy-mm-dd" format의 string을 인자로 줄 수 있다.
 * new Date(year, month, date) - 이 때, month는 0~11까지의 숫자가 들어갈 수 있다. (ex: 12월- 11)
 * 2) getDays()를 사용하면 요일에 대한 Index를 반환받는다.
 * 일요일(0) ~ 토요일(6)
 * 
 * [느낀 점]
 * 1) javascript에서 Date를 사용하는 방법을 더 익혀야겠다.
 * 2) 아직 javascript 에서 new를 언제 꼭 써야하고, 언제 생략해도되는지 헷갈린다.
 */

function solution1(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const daysId = (new Date(2016, a-1, b)).getDay();

  return days[daysId];
}  

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(5, 24))
        .toEqual("TUE");   
  });
});