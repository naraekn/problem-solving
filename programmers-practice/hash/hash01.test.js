
function solution1(participant, completion) {
  participant.sort();
  completion.sort();
  
  const finder = participant
      .map((person, index) => person !== completion[index]);

  const result = participant[finder.indexOf(true)];

  return result;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
          solution(
            ["leo", "kiki", "eden"], 
            ["eden", "kiki"]))
          .toEqual("leo");
    
      expect(
          solution(
            ["marina", "josipa", "nikola", "vinko", "filipa"], 
            ["josipa", "filipa", "marina", "nikola"]))
          .toEqual("vinko");     

      expect(
        solution(
          ["mislav", "stanko", "mislav", "ana"],
          ["stanko", "ana", "mislav"]))
        .toEqual("mislav");         
  });
});