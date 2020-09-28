// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution1(array, commands) {
  const answer = [];

  commands.forEach(([first, last, nth]) => {
    const sliced = array.slice(first - 1, last);
    sliced.sort((a,b) => a - b);
    answer.push(sliced[nth-1]);
  });

  return answer;
}


test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(
          [1, 5, 2, 6, 3, 7, 4], 
          [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
        ))
        .toEqual([5, 6, 3]); 
  });
});