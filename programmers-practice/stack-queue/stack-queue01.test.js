// url: https://programmers.co.kr/learn/courses/30/lessons/42586

// case1: 7, 3, 9 > 7, 7, 9, > 2, 1
// case2: 5, 10, 1, 1, 20, 1 > 5, 10, 10, 10, 20, 20 > 1, 3, 2

function solution1(progresses, speeds) {
  const remainingDays = progresses
    .map((progress, index) => 
      Math.ceil((100-progress)/speeds[index])
    );

  remainingDays.forEach((days, index) => {
    remainingDays[index] = days < remainingDays[index-1] 
      ? remainingDays[index-1] 
      : days
  });

  const counts = {};

  remainingDays.forEach((x) => counts[x] = (counts[x] || 0) + 1);

  const answer = Object.values(counts);

  return answer;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
          solution(
            [93, 30, 55],
            [1, 30, 5]
          ))
          .toEqual([2, 1]);  
      
      expect(
        solution(
          [95, 90, 99, 99, 80, 99],
          [1, 1, 1, 1, 1, 1]
        ))
        .toEqual([1, 3, 2]);        
  });
});