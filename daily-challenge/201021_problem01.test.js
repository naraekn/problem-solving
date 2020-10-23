/**
 * 핸드폰 번호 가리기
 * 
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [배운 점]
 * 스터디 준비를 하며 배웠던 정규표현식의 전방탐색 (look ahead)을 활용했다.
 * 스터디 준비를 하며만들어둔 예제: console.log("카카오택시는 10000원 우버는 $20".replace(/\d+(?=원)/g, "444"));
 * 
 * [느낀 점]
 * 저번에 풀었던 문제를 정규표현식으로 다시 풀어봤다.
 * 1. 볼 때도 어려웠지만 쓸 때는 더 어렵다.
 * 2. 아직 명확하게 이해하지 못한 부분이 있다. (콘솔로그 두개 차이 아직 왜 다른지 모르겠음)
 */

function solution1(phone_number) {
  // console.log(phone_number.match(/.+(?=\d{4})/g));
  // console.log(phone_number.match(/[0-9](?=\d{4})/g));
  
  return phone_number.replace(/[0-9](?=\d{4})/g, "*");
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("01033334444"))
        .toEqual("*******4444");   

      expect(
        solution("027778888"))
        .toEqual("*****8888");   
  });
});