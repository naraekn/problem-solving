// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution1(operations) {
  const queue = [];

  const isEnqueue = (action) => action === "I"
  const isDequeueMax = (action, value) => action === "D" && value === 1;
  const isDequeueMin = (action, value) => action === "D" && value === -1;
  const isEmpty = (arr) => arr.length === 0;
  const isOneValue = (arr) => arr.length === 0;
  const last = (arr) => arr.length - 1;

  operations.forEach((operation) => {
    const [action, value] = operation
      .split(' ')
      .map((value, index) => index === 1 ? parseInt(value) : value);

    if(isEnqueue(action)) {
      queue.push(value);
      queue.sort((a,b) => a - b);
    } 
    if (isDequeueMax(action, value)) {
      queue.pop();
    } 
    if (isDequeueMin(action, value)) {
      queue.shift();
    }
  });

  let answer;

  if (isEmpty(queue)) {
    answer = [0,0];
  } else if (isOneValue(queue)) {
    answer = [queue[0], queue[0]];
  } else {
    answer = [queue[last(queue)], queue[0]];
  }

  return answer;
}

test('sample', () => {
  [solution1].forEach(solution => {
    expect(
      solution(["I 16", "D 1"]))
      .toEqual([0,0]);

    expect(
      solution(["I 7", "I 5", "I -5", "D -1"]))
      .toEqual([7,5]);

  });
});