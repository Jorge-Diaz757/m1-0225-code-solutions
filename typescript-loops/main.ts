/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  /*
              for(let i = 1; i <=10; i++) {
                numbers.push(i)
              }
                */
  return numbers;
}
console.log(getNumbersToTen());

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('hello', 5));
