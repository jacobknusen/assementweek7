//#1
function sumZero(param) {
    for (let a = 0; a < param.length; a++) {
      for (let b = 0; b < param.length; b++) {
        if (param[a] + param[b] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  console.log(sumZero([1, 12, 3, -12]));
  //time complexity: O(n^2)
  //space complexity: O(n)
  
  //#2
  function uniqueCharacters(param) {
    for (let a = 0; a < param.length; a++) {
      for (let b = 0; b < param.length; b++) {
        if (a !== b && param[a] === param[b]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(uniqueCharacters("moonday"));
  //time complexity: O(n^2)
  //space complexity: O(n)
  
  //#3
  function pangramSentence(param) {
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let variable of param.toLowerCase()) {
      alphabet.delete(variable);
      if (alphabet.size == 0) {
        return true;
      }
    }
    return false;
  }
  console.log(pangramSentence("the crazy jake is just trying to pass:)"));
  //time complexity: O(1) 
  //space complexity: O(n)
  
  //#4
  function longestWord(param) {
    let zero = 0;
    param.forEach((word) => {
      if (word.length > zero) {
        zero = word.length;
      }
    });
    return zero;
  }
  console.log(longestWord(["hey", "how's it going?"]));
  //time complexity: O(n)
  //space complexity: O(n)