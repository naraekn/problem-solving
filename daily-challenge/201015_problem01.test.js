/**
 * [링크]
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * 
 * [느낀점]
 * 최근 들어 알고리즘 문제풀이를 하면서, "왜 알고리즘 문제풀이를 해야하는가?"에 대하여 생각해보게 되었다.
 * 코딩테스트를 합격하기 위해서가 아니라, 왜 좋은 개발자가 되기 위해서는 알고리즘 문제풀이를 꾸준히 해야하는걸까?
 * 내가 내리게 된 결론은, 효율적이면서도 읽기 좋은 코드를 작성하는 것은 쉽지 않은 일이지만 중요한 일이기 때문이라는 것이었다.
 * for, while, let을 쓰면 대부분 성능문제를 일으키지 않고 테스트를 통과되는 경우가 많았다. 
 * 그렇지만, 함수형 프로그래밍을 할 수 없고 가독성이 떨어지며 변수 변경에 따른 위험을 감수해야한다.
 * 순수함수를 사용한 함수형프로그래밍을 하면 가독성도 좋고 변수 변경이 없으나, 
 * 때에 따라 recursion 등을 사용해야하고 이에따라 런타임에러가 발생되는 경우가 많았다.
 * 결국, 성능이 허용되는 한 좋은 코드를 작성하는 것은 쉽지 않은 일이고 
 * 이를 위해 내가 알고리즘문제풀이를 하며 연습을 해야 좋은 개발자가 되겠다는 생각이 들었다.
 * 
 * 그래서 오늘은 코드숨에서 배운대로 for, while, let을 사용하지 않고, 변수의 이름을 신경써서 문제를 풀어봤다.
 * 추가적으로는, 스터디에서 반복적으로 배웠던 커링을 적용해보려고 노력했다. (맞게 쓴건지는 모르겠음)
 * getOrderOfEachSkills를 외부에 있는 skillOrder를 참조하지 않는 순수함수를 만들고 싶었고,
 * 그러면서도 skillOrder라는 매개변수를 강제로 매핑함으로서 가독성을 높이고 싶었다. 
 * 단순히 답을 맞추기 위한 목적으로 문제풀이를 한 것이 아니다보니 문제 풀이 시간은 오래걸렸다.
 * 그렇지만 나에게 필요한 연습이라는 생각이 들었고, 좋은 개발자가 되기 위해 이런 시도들을 더 해봐야겠다는 생각이 들었다.
 */

function solution1(skill, skill_trees) {
  const checkIfOrderIsRight = (arr) => arr
      .every((v,i,a) => i===0? v===0 : a[i-1]+1 === v);

  const getOrderOfEachSkills = (order) => (value) => value
      .split('')
      .filter((alphabet) => Object.keys(order).includes(alphabet))
      .map((alphabet) => order[alphabet]);

  const skillOrder = Object.fromEntries(skill.split('').map((value,i) => [value, i]));
  
  const rightSkillTrees = skill_trees
      .map(getOrderOfEachSkills(skillOrder))
      .map(checkIfOrderIsRight)
      .filter((order) => order !==false);

  return rightSkillTrees.length;
}

test('sample', () => {
  [solution1].forEach(solution => {
      expect(
        solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
        .toEqual(2);  
  });
});