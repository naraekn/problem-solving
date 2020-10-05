function solution1(n) {
  const overHundreds = (value) => value >= 100;

  const changeHundred = (hundred, d) => 
    (hundred + 2*(d+1)) < 0 || (hundred + 2*(d+1)) >= 10;

  const getTarget = (hundred, d) =>
    (100*hundred + 10*(hundred+d) + (hundred+2*d));

  const countProgression = (number) => {
    let d = 0;
    let hundred = 1;
    let progressionsCount = 0;
    let target = getTarget(hundred,d);

    while(target <= number) {
      progressionsCount++;

      if(changeHundred(hundred, d)) {
        hundred++;
        d = -parseInt(hundred/2);
      } else {
        d++;
      }
      target = getTarget(hundred,d);
    }

    return progressionsCount;
  };

  const numbers = [...Array(n).keys()].map(value => value+1);

  let count = numbers.filter(v => v < 100).length;

  if (overHundreds(n)) {
    count += countProgression(n);
  }

  return count;
}

function solution2(n) {
  const numbers = [...Array(n).keys()].map(value => value+1);

  const isProgression = (arr) => (arr[2]-arr[1]) === (arr[1]-arr[0]);

  let count = numbers.filter(v => v<100).length;

  [...numbers.filter(v => v>=100 && v<1000)].forEach((number) => {
      if(isProgression(String(number).split(''))) {
          count++;
      }
  });

  return count;
}

test('sample', () => {
  [solution1, solution2].forEach(solution => {
    expect(
      solution(110))
      .toEqual(99);

    expect(
      solution(1))
      .toEqual(1);

    expect(
      solution(210))
      .toEqual(105);

    expect(
      solution(1000))
      .toEqual(144);
  });
});