// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // added arrays for all characters that can be included in final password
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

  // created empty array for all combined characters to be chosen from
  var combinedCharacters = [];

  // created empty array for final password resulting from user choices
  var finalResult = []

  // added prompts and confirm commands for user
  var initialClick = -1;
  var uppersIncluded = confirm("Uppercase letters included?");
  var lowersIncluded = confirm("Lowercase letters included?");
  var numbersIncluded = confirm("Numbers included?");
  var specialsIncluded = confirm("Special Characters included?");

  // helped obtained from Xpert learning assistant so user must meet the 8-128 requirements
  while (initialClick < 8 || initialClick > 128 || isNaN(initialClick)) {
    initialClick = prompt("Please choose between 8 and 128 characters");
    if (initialClick === null) {
      return "";
    }

    initialClick = parseInt(initialClick);

    if (initialClick < 8 || initialClick > 128 || isNaN(initialClick)) {
      alert("invalid input, please choose between 8-128 characters");
    }
  }

  // creating if statements for each confirm chosen to be included in final array
  if (uppersIncluded) {
    combinedCharacters = combinedCharacters.concat(upperCase);
  }

  if (lowersIncluded) {
    combinedCharacters = combinedCharacters.concat(lowerCase);
  }

  if (numbersIncluded) {
    combinedCharacters = combinedCharacters.concat(numeric);
  }

  if (specialsIncluded) {
    combinedCharacters = combinedCharacters.concat(specialCharacters);
  }
  // got help from AskBCS helpdesk user "rojwilli" for lines 44-49
  for (var i = 0; i < initialClick; i++) {
    var index = Math.floor(Math.random() * combinedCharacters.length)
    finalResult.push(combinedCharacters[index]);
  }
  var result = finalResult.join("")
  return result;
}

//Write password to the #password input - already given in starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button - already given in starter code
generateBtn.addEventListener("click", writePassword);
