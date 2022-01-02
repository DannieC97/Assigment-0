function isPalindrome(word) {

  let reverse = ""
  flag = false
  let character 
  for(let i = 0;i<word.length;i++){
    character = word.charAt(i)
    reverse = character + reverse

    if(reverse == word){
      flag = true
    }
  }
  
  
  return flag
  
}


// Do not edit this line;
module.exports = isPalindrome;