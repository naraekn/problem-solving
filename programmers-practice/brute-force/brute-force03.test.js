function solution1(brown, yellow) {
  let vertical = 0;

  const meetYellowCount = (v) => (((brown - 2*v)/2 - 2) * v) === yellow;

  while(!meetYellowCount(vertical)) {
    vertical++;
  }

  const answer = [(brown- 2*vertical)/2 ,vertical + 2];

  return answer;
}
test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution(10, 2))
        .toEqual([4,3]); 

      expect(
        solution(8,1))
        .toEqual([3,3]); 

      expect(
        solution(24,24))
        .toEqual([8,6]);     
  });
});
