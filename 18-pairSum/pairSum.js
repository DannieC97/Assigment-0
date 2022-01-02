function pairSum(nums, target) {
  let flag = false
  if(nums.length <= 1){
    throw error
  }
  for(let i = 0;i<nums.length;i++){
    for(let j = 0;j<nums.length;j++){
      if(nums[i] + nums[j] == target){
        flag = true
      }
    }
  }
  return flag
}

// Do not edit this line;
module.exports = pairSum;