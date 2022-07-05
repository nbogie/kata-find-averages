/**
Return the two separate averages of negative numbers
 and positive numbers in a given array of numbers.

Return the averages as two elements of an array.

Use null to indicate when an average is not possible 
- e.g. when there are no positive numbers.

@param inputNumbers array of numbers, possibly positive or negative or zero
@return array of exactly two elements, [positiveAverage, negativeAverage].  Either can be null if no average is available.

TODO: what about zeros in the input.
*/

/* pseudocode: 
POS_NUMBERS = getAllPosNumbers(INPUT_NUMBERS)
NEG_NUMBERS = getAllNegNumbers(INPUT_NUMBERS)

POS_AVG = CALC_AVG(POS_NUMBERS)
NEG_AVG = CALC_AVG(NEG_NUMBERS)
return [POS_AVG, NEG_AVG]
*/
function calcAverages(inputNumbers) {
  const posNums = getAllPosNumbers(inputNumbers);
  const negNums = getAllNegNumbers(inputNumbers);
  const posAvg = calcAverage(posNums);
  const negAvg = calcAverage(negNums);
  return [posAvg, negAvg];
}

function testCalcAverages() {
  console.log(calcAverages([10, -100, 20, -200, -3]), [15, -101]);
  console.log(calcAverages([20, -3]), [20, -3]);
  console.log(calcAverages([]), [null, null]);
  console.log(calcAverages([20, 10]), [15, null]);
  console.log(calcAverages([3, 2]), [2.5, null]);
}

/** return the average of given array of numbers.
 *
 * @param numbersToAverage
 * @return number - the average, or null if the array is empty
 */

/* pseudocode:
if NUMBERS_TO_AVERAGE is empty
    return null
TOTAL = 0
NUM_OF_NUMBERS = length of NUMBERS_TO_AVERAGE
for each NUM of NUMBERS_TO_AVERAGE
    TOTAL = TOTAL + NUM    
AVG = TOTAL / NUM_OF_NUMBERS
return AVG
*/

function calcAverage(numbersToAverage) {
  if (numbersToAverage.length === 0) {
    return null;
  }
  let total = 0;
  const numOfNumbers = numbersToAverage.length;
  for (const num of numbersToAverage) {
    total = total + num;
  }
  const avg = total / numOfNumbers;
  return avg;
}

function testCalcAverage() {
  console.log(calcAverage([10]), 10);
  console.log(calcAverage([10, 30]), 20);
  console.log(calcAverage([-20, -100]), -60);
  console.log(calcAverage([]), null);
  console.log(calcAverage([-3, 3]), 0);
  console.log(calcAverage([1, 2, 3]), 2);
}

/* pseudocode
 * PARAMS: INPUT_NUMBERS
 * POS_NUMS = []
 * for each NUM of INPUT_NUMBERS
 *     if NUM is positive
 *         append NUM to POS_NUMS
 * return POS_NUMS
 */
function getAllPosNumbers(inputNumbers) {
  const posNums = [];
  for (const num of inputNumbers) {
    if (num > 0) {
      posNums.push(num);
    }
  }
  return posNums;
}

function getAllNegNumbers(inputNumbers) {
  const posNums = [];
  for (const num of inputNumbers) {
    if (num < 0) {
      posNums.push(num);
    }
  }
  return posNums;
}

function testGetAllPosNumbers() {
  console.log(getAllPosNumbers([10, -2, -100, 3, -7]), [10, 3]);
  console.log(getAllPosNumbers([10, 0, 0, -7]), [10]);
  console.log(getAllPosNumbers([-20, -40]), []);
}

function testGetAllNegNumbers() {
  console.log(getAllNegNumbers([10, -2, -100, 3, -7]), [-2, -100, -7]);
  console.log(getAllNegNumbers([10, 0, 0, -7]), [-7]);
  console.log(getAllNegNumbers([20, 40]), []);
}
// testGetAllNegNumbers();
// testGetAllPosNumbers();

// testCalcAverage();
testCalcAverages();
