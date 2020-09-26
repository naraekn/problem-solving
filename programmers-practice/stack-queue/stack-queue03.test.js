// url: https://programmers.co.kr/learn/courses/30/lessons/42587

// [[0, 2], [1, 1], [2, 3], [3, 2]]

function solution1(priorities, location) {
  const waiting = priorities.map((value, index) => [index, value]);
  const completed = [];

  const isEmpty = (arr) => arr.length === 0;

  const checkPriorityIsFirst = (target, arr) => 
    arr.every((value) => value[1] <= target[1]);

  while (!isEmpty(waiting)) {
    const target = waiting.shift();

    if(checkPriorityIsFirst(target, waiting)) {
      completed.push(target);
    } else {
      waiting.push(target);
    }
  }

  const answer = completed.findIndex((value) => value[0] === location) + 1;

  return answer;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
          solution(
            [2, 1, 3, 2], 2
          ))
          .toEqual(1);  
      
      expect(
          solution(
            [1, 1, 9, 1, 1, 1], 0 
          ))
          .toEqual(5);        
  });
});