class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let length = nums.length;
    let midPoint = Math.floor(length / 2);
    let newNums = nums;
    if(nums[midPoint] === target ){
      this.flag = true
    }

    else if (nums[midPoint] > target) {

        let newNums = nums.slice(0, midPoint);
        return this.binarySearch(newNums, target);

    }
    else if (nums[midPoint] < target) {

        let newNums = nums.slice(midPoint + 1, nums.length);
        return this.binarySearch(newNums, target);

    } 
    return this.flag
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;