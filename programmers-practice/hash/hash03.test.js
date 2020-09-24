function solution1(genres, plays) {
  const statistics = {};
  const indexes = {};
  
  genres.forEach((genre, index) => {
     statistics[genre] = statistics[genre] === undefined
          ? [ [plays[index], index] ]
          : [ ...statistics[genre], [ plays[index], index ]];
  });
  
  Object.keys(statistics).forEach((key) => {
      statistics[key] = [...statistics[key].sort((a,b) => b[0] - a[0])];
  });
  
  const reducer = (x,y) => x + y;
  
  const allPlays = (albums) => albums
      .map((album) => album[0])
      .reduce(reducer);
  
  const orders = Object.keys(statistics);
  orders.sort((a,b) => allPlays(statistics[b]) - allPlays(statistics[a]));
  
  const result = [];
  
  orders.forEach((genre, index) => {
      if(statistics[genre].length == 1){
          result.push(statistics[genre][0][1]);
      } else {
          result.push(statistics[genre][0][1]);
          result.push(statistics[genre][1][1]);
      }
  })
  
  return result;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
          solution(
            ["classic", "pop", "classic", "classic", "pop"],
            [500, 600, 150, 800, 2500]
          ))
          .toEqual([4, 1, 3, 0]);    
  });
});