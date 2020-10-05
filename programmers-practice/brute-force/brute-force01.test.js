function solution1(answers) {
  const person1 = [1,2,3,4,5];  
  const person2 = [2,1,2,3,2,4,2,5];
  const person3 = [3,3,1,1,2,2,4,4,5,5];

  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    if (answer === person1[i%5]) {
      scores[0]++;
    }
    if (answer === person2[i%8]) {
      scores[1]++;
    }
    if (answer === person3[i%10]) {
      scores[2]++;
    }
  });

  const maxScore = Math.max(...scores);

  const answer = scores.map((v, i) => v === maxScore ? i+1 : '').filter(String);

  return answer;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution([1,2,3,4,5]))
        .toEqual([1]); 

      expect(
        solution([1,3,2,4,2]))
        .toEqual([1,2,3]);  
  });
});
