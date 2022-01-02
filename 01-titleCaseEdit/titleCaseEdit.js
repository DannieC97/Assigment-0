function titleCaseEdit(title) {
  let word = title.toLowerCase().split(' ');
   for (var i = 0; i < word.length; i++) {
      word[i] = word[i].charAt(0).toUpperCase() +
      word[i].substring(1);
   }
   return word.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;