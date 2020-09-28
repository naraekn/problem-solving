// TODO: Refactor

function solution1(jobs) {
  const sum = (a, b) => a + b;
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
  
  const isAllTasksFinished = (arr) => arr.length === jobs.length;
  const searchNextTask = (arr, time) => arr
    .filter((value) => value[0] <= time)
    .reduce((a,b) => a[1] < b[1] ? a : b, 0);
  
  const waiting = [...jobs].sort((a, b) => a[0] - b[0]);
  const records = [];  

  let timer = 0;
  let nextId = null;
  let ongoing = null;
  
  while(!isAllTasksFinished(records)) {
    const nextTask = searchNextTask(waiting, timer) || null;

    if(nextTask) {
      nextId = waiting.indexOf(searchNextTask(waiting, timer));
      swap(waiting, 0, nextId);
      ongoing = waiting.shift();
      timer += ongoing[1];
      records.push(timer-ongoing[0]);
    } else {
      timer++;
    }
  }

  const answer = Math.floor(records.reduce(sum, 0) / jobs.length);

  return answer;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([[0, 3], [1, 9], [2, 6]]))
        .toEqual(9);

      expect(
        solution([[0, 3], [4, 3], [8, 3]]))
        .toEqual(3);

      expect(
        solution([[0, 5], [6, 1], [6, 2]]))
        .toEqual(3);
        
      expect(
        solution([[0, 5], [6, 2], [6, 1]]))
        .toEqual(3);  
 
  });
});