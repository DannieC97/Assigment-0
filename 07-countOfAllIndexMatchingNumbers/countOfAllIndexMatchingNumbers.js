function countOfAllIndexMatchingNumbers(nums) {
  let count = 1
  if(nums[1] < nums[0] ){
    count = 0
  }
  for(let i=0;i<nums.length;i++){
    if(nums[i] + 1 == nums[i+1]){
      count++
    }
     
    
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;