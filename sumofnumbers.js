function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    sum += i;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length + 1) {
    sum += i;
    i++;
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[nums.length - 1] + sumRecursion(nums.slice(0, nums.length - 1));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

const test = [1, 2, 3, 4, 5, 6]; // total = 21

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
