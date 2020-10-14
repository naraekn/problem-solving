function solution1(number, k) {
  const remain = number.length - k;
  const arr = number.split('').map(v => parseInt(v));

  let answer = '';
  let left = 0;
  let right = k+1;

  for (let i = 0; i < remain; i++) {
    const choices = arr.slice(left, right);
    const maxIndex = left + choices.indexOf(Math.max(...choices));
    
    answer += String(arr[maxIndex]);

    left = maxIndex + 1;
    right++;
  }

  return answer;
}

function solution2(number, k) {
  const place = number.length - k;
  const arr = number.split('').map(v => parseInt(v));

  let answer = '';
  let left = 0;
  let right = k+1;

  let i = 0;

  for (let i = 0; i < place; i++) {
    const choices = arr.slice(left, right);
    const maxIndex = left + choices.indexOf(Math.max(...choices));
    
    answer += String(arr[maxIndex]);

    left = maxIndex + 1;
    right++;
  }

  return answer;
}

test('sample', () => {
  [solution1, solution2].forEach(solution => {
      expect(
        solution("1924", 2))
        .toEqual("94"); 

      expect(
        solution("1231234", 3))
        .toEqual("3234"); 

      expect(
        solution("4177252841", 4))
        .toEqual("775841");          
  });
});
