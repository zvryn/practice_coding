/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once. */

function solution(number) {
  const dividedByThree = [];
  const dividedByFive = [];
  const dividedByBoth = [];
  const numberArray = [];
  let result;
  let i = 0;

  if (number <= 0) {
    return 0;
  }
  for (i = 0; i <= number - 1; i++) {
    numberArray.push(i);
  }

  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 3 == 0) {
      dividedByThree.push(numberArray[i]);
    }

    if (numberArray[i] % 5 == 0) {
      dividedByFive.push(numberArray[i]);
    }
    if (numberArray[i] % 3 == 0 && numberArray[i] % 5 == 0) {
      dividedByBoth.push(numberArray[i]);
    }

    result =
      dividedByThree.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) +
      dividedByFive.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) -
      dividedByBoth.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
  }

  return result;
}

function optimizeSolution(number) {
  if (number <= 0) return 0;

  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

let test = solution(20);
let test2 = optimizeSolution(20);
console.log(test);
console.log(test2);
