// Declarations
var newPassword = {
  length: 0,
  uppercase: false,
  lowercase: false,
  specialChar: false,
  numeric: false,
  password: ""
};

var passwordText = document.querySelector("#password");

// Variables needed to build total allowed characters.
const letters = "ABCDEFGHOJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()";
var passwordChars = "";

// Function to get the desired password length
var getPasswordLength = function() {
  
  // ask player for desired password length
  var passwordLength = window.prompt('How long does your password need to be?  Please enter a number between 8 and 126');
  
  // convert answer from prompt to an actual number
  passwordLength = parseInt(passwordLength);
  
  // validate desired password length
  if ((passwordLength >= 8) && (passwordLength <= 128)) {

    // Password length is valid - keep it
    newPassword.length = passwordLength;

  } else {
    // Password length is invalid
    window.alert("You need to provide a valid length. Please try again.");
    // restart function
    getPasswordLength();
  }
};

// Ask user for acceptable character types for the password
var getDesiredChars = function() {
  newPassword.uppercase = window.confirm("Should your password use 'UPPERCASE' letters?");
  newPassword.lowercase = window.confirm("Should your password use 'lowercase' letters?");
  newPassword.numeric = window.confirm("Should your password use 'Numeric' characters?");
  newPassword.specialChar = window.confirm("Should your password use 'Special' characters?");

  // For each desired character type, add it to the passwordChars string
  if (newPassword.uppercase) {
    passwordChars = letters;
  }
  if (newPassword.lowercase) {
    passwordChars += letters.toLowerCase();
  }
  if (newPassword.numeric) {
    passwordChars += numbers;
  }
  if (newPassword.specialChar) {
    passwordChars += symbols;
  }
  // If no character types were requested, try again
  if (!passwordChars) {
    window.alert("You need to have at least one acceptable type of character for your new password. Please try again.");
    getDesiredChars();
  }
}

// This is the main function to generate the password.
function generatePassword() {

  // Declare variables
  
  // Get desired password length 
  
  // The following retuns "undefined" if bad answers are given first.
  // newPassword.length = getPasswordLength();
  // This call works

  // call function to get password length
  getPasswordLength();

  // Get desired acceptable characters
  getDesiredChars();

  // Loop through acceptable character string to build password


  let password = "";
  for (let i = 0; i < newPassword.length; i++) {
    newPassword.password += passwordChars.charAt(
      Math.floor(Math.random() * passwordChars.length));
  }
  // Reurn to the user with the new password
  
  return newPassword.password;
}

// Starter code is below
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  passwordText.value = password;
}

function resetPassword() {
  newPassword.length = 0
  newPassword.uppercase = false
  newPassword.lowercase = false
  newPassword.specialChar = false
  newPassword.numeric = false
  newPassword.password = "";
}

// Add event listener to generate button
generateBtn.onclick = function() {
  resetPassword();
  writePassword();
}
