// Assignment code here
var getPasswordLength = function() {
  // ask player for desired password length
  var promptLength = window.prompt('How long does your password need to be?  Please enter a number between 8 and 126');
  
  // convert answer from prompt to an actual number
  promptLength = parseInt(promptLength);
  console.log("Before IF promptLength = " + promptLength);
  // validate desired password length
  if ((promptLength >= 8) && (promptLength <= 126)) {

  console.log("Good promptLength = " + promptLength);
  return promptLength;

  } else {
    console.log("BAD promptLength = " + promptLength);
    window.alert("You need to provide a valid length. Please try again.");
    // use return to call it again and stop the rest of this function from running
    getPasswordLength();
  }
};

var newPassword = {
  length: getPasswordLength(),
  uppercase: false,
  lowercase: false,
  specialChar: false,
  numeric: false,
};

function generatePassword() {
  // Declare variables
  
  // Get desired password length 
  getPasswordLength();
  // Get desired acceptable characters
  // Loop through character sets to build password

  // function to get password length
  

  return "password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
