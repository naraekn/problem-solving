function solution1(numbers) {
  const getPermutations = (arr, r) => {
    const results = [];
  
    if (r === 1) return arr.map((value) => [value]);
    
    arr.forEach((fixed, id, origin) => {
      const rest = [...origin.slice(0, id), ...origin.slice(id+1)];
      const permutations = getPermutations(rest, r - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached); 
    });
    
    return results; 
  } 
  
  const getCombinations = (arr, r) => {
    const results = [];
    
    if (r === 1) return arr.map((value) => [value]); 
  
    arr.forEach((fixed, id, origin) => {
      const rest = origin.slice(id + 1); 
      const combinations = getCombinations(rest, r - 1); // 
      const attached = combinations.map((combination) => [fixed, ...combination]); 
      results.push(...attached); 
    });
  
    return results; 
  }

  const isPrime = (value) => {
    if(value === 2) return true; 

    else if(value < 2) return false; 
    
    else {
      for (let i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
          return false; 
        }
      }
      return true;
    }
  };

  const allCases = [...Array(numbers.length).keys()]
    .map(value => value + 1)
    .map(r => getCombinations([...numbers.split('')], r))
    .flat()
    .map(arr => getPermutations(arr, arr.length))
    .flat()
    .map(arr => parseInt(arr.join('')));
  
  const caseSet = [...new Set(allCases)];
  const primes = caseSet.filter(isPrime);

  return primes.length;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("17"))
        .toEqual(3); 

      expect(
        solution("011"))
        .toEqual(2); 
  });
});
