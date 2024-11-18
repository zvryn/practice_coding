/*Task
Given an array of integers, 
your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) 
should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. 
it should not mutate the input array.*/

const number = [2, 7, 5, 3, 1, 2, 4, 6, 8];

const sortNumber = bubbleSortOnce(number);

function bubbleSortOnce(arr) {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
  }
  return newArr;
}

console.log(sortNumber);
