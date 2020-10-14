// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution1(citations) {
  return [...citations]
    .sort((a,b) => b - a)
    .filter((h, id, arr) => 
      arr.slice(0, id+1).length >= h &&
      arr.slice(id+1, arr.length - 1).every(value => value<=h))[0];
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([3, 0, 6, 1, 5]))
        .toEqual(3); 

      expect(
        solution([6, 5, 4, 3, 2, 0, 0, 0, 0, 0]))
        .toEqual(3);  
  });
});
