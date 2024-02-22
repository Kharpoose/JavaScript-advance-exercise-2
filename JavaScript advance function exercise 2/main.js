const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(3, 5));
console.log(multiply(8, 5));
console.log(Math.round( multiply(32, 15) / 22));

console.log("")

const multiplyshort = (a, b) => a * b;

console.log(multiplyshort(8, 7));
console.log(multiplyshort(2, 5));
console.log(Math.round( multiplyshort(32, 17) / 22));


function countPositive(nums) {
    let positiveNumbers = 0;

    nums.forEach((num) => {
      if (num > 0) {
        positiveNumbers++;
      }
    });

    return positiveNumbers;
  }

  console.log(countPositive([1, -3, -5]));
  console.log(countPositive([-2, -3, -5, 12, 7, 10]));