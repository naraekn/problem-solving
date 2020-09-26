// url: https://programmers.co.kr/learn/courses/30/lessons/42583

// Solution1 has runtime errors for some cases
// TODO: Apply tail recursion optimization 
function solution1(bridge_length, weight, truck_weights) {
  const sum = (a,b) => a + b;

  const isAllTrucksPassed = (bridge, waiting) => 
    (bridge.every((value) => value === 0) && waiting.length === 0);

  const canLoadNewTruck = (bridge, waiting) =>
    (waiting.length !== 0) && 
    ([...bridge.slice(1), waiting[0]].reduce(sum, 0) <= weight);

  const getTimeToPassBridge = ({ counts, bridge, waiting }) => (
    isAllTrucksPassed(bridge, waiting)
      ? counts
      : getTimeToPassBridge({ 
        counts: counts + 1,
        bridge: [
          ...bridge.slice(1), 
          canLoadNewTruck(bridge, waiting)
            ? waiting[0] : 0
        ],
        waiting: canLoadNewTruck(bridge, waiting)
          ? [...waiting.slice(1)]
          : [...waiting]
      })
  );

  const answer = getTimeToPassBridge({
    counts: 0,
    bridge: Array(bridge_length).fill(0),
    waiting: [...truck_weights],
  });

  return answer;
}  

// Apply while loop instead of tail recursion optimization
// One of the tests failed with timeout
function solution2(bridge_length, weight, truck_weights) {
  const sum = (a,b) => a + b;

  const isAllTrucksPassed = (bridge, waiting) => 
    (bridge.every((value) => value === 0)) && (waiting.length === 0);

  const canLoadNewTruck = (bridge, waiting) =>
    (waiting.length !== 0) && 
    ([...bridge.slice(1), waiting[0]].reduce(sum, 0) <= weight);

  const getTimeToPassBridge = (initialState) => {
    let counts = initialState.counts;
    let bridge = initialState.bridge;
    let waiting = initialState.waiting;

    while(!isAllTrucksPassed(bridge, waiting)) {
      if(canLoadNewTruck(bridge, waiting)) {
        bridge = [...bridge.slice(1), waiting[0]];
        waiting = [...waiting.slice(1)];
      } else {
        bridge = [...bridge.slice(1), 0];
        waiting = [...waiting];
      }
      counts += 1;
    }

    return counts;
  };

  const answer = getTimeToPassBridge({
    counts: 0,
    bridge: Array(bridge_length).fill(0),
    waiting: [...truck_weights],
  });

  return answer;
}  

// Apply while loop and shift method
// One of the tests failed with timeout
function solution3(bridge_length, weight, truck_weights) {
  const sum = (a,b) => a + b;

  const isAllTrucksPassed = (bridge, waiting) => 
    (bridge.every((value) => value === 0)) && (waiting.length === 0);

  const canLoadNewTruck = (bridge, waiting) =>
    (waiting.length !== 0) && 
    ([...bridge.slice(1), waiting[0]].reduce(sum, 0) <= weight);

  const getTimeToPassBridge = (initialState) => {
    let { counts, bridge, waiting } = initialState;

    while(!isAllTrucksPassed(bridge, waiting)) {
      if(canLoadNewTruck(bridge, waiting)) {
        const newTruck = waiting.shift();

        bridge.shift();
        bridge.push(newTruck);
      } else {
        bridge.shift();
        bridge.push(0);
      }
      counts += 1;
    }

    return counts;
  };

  const answer = getTimeToPassBridge({
    counts: 0,
    bridge: Array(bridge_length).fill(0),
    waiting: [...truck_weights],
  });

  return answer;
}  

// Solution4 passes all test
// Reduce the time complexity
function solution4(bridge_length, weight, truck_weights) {
  const sum = (a,b) => a + b;

  const isTruckWaiting = (waiting) => (waiting.length !== 0);

  const canLoadNewTruck = (bridge, waiting) =>
    (waiting.length !== 0) && 
    ((bridge.slice(1).reduce(sum, 0) + waiting[0]) <= weight);

  const getTimeToPassBridge = (initialState) => {
    let { counts, bridge, waiting } = initialState;

    while(isTruckWaiting(waiting)) {
      if(canLoadNewTruck(bridge, waiting)) {
        const newTruck = waiting.shift();

        bridge.shift();
        bridge.push(newTruck);
      } else {
        bridge.shift();
        bridge.push(0);
      }
      counts += 1;
    }

    return counts + bridge_length;
  };

  const answer = getTimeToPassBridge({
    counts: 0,
    bridge: Array(bridge_length).fill(0),
    waiting: [...truck_weights],
  });

  return answer;
}  


// Test if stack over flow occurs for the case below
// console.log(solution2(10000, 10, [1,5,8,2,5,8,9,4,2,7,3,4,5,3,7,7,5,7,5,3,2]));
// console.log(`counts: ${counts}, bridge: ${bridge}, waiting: ${waiting}`);

test('sample', () => {
  [solution1, solution2, solution3, solution4].forEach(solution => {
      expect(
          solution(1, 10, [7]))
          .toEqual(2); 
      
      expect(
        solution(3, 10, [7]))
        .toEqual(4);     

      expect(
          solution(2, 10, [7,4,5,6]))
          .toEqual(8); 
          
      expect(
        solution(3, 10, [7,4,2,3,6,8]))
        .toEqual(14);      
  
      expect(
          solution(100, 100, [10]))
          .toEqual(101); 

      expect(
        solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))
        .toEqual(110);            
  });
});