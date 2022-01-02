function frequencyCounter(word) {        
  let freq = {};
    for (let i=0; i<word.length;i++) {
        let character = word.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;