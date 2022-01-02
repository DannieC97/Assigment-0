function setUnionOfAnyAmountOfSets(...args) {
  let newSet = new Set();
  

  for (const iterable of args) {
      for (const item of iterable) {
        newSet.add(item);
      }
    }
    
    
    return newSet
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;