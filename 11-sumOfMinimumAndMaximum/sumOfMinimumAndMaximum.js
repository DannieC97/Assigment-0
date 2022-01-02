function sumOfMinimumAndMaximum(nums) {
  let max = Number.MIN_VALUE
  let min = Number.MAX_VALUE
  for(let i = 0;i < nums.length; i++){
    if(nums[i] > max){
      max = nums[i]
    }
    if(nums[i] < min){
      min = nums[i]
    }
  }
  return (max + min)
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;