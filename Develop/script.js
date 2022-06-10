// Assignment code here
var newPassword = {
  length: 0,
  uppercase: false,
  lowercase: false,
  specialChar: false,
  numeric: false,
};

var getPasswordLength = function() {
  // ask player for desired password length
  var passwordLength = window.prompt('How long does your password need to be?  Please enter a number between 8 and 126');
  
  // convert answer from prompt to an actual number
  passwordLength = parseInt(passwordLength);
  console.log("Before IF passwordLength = " + passwordLength);
  // validate desired password length
  if ((passwordLength >= 8) && (passwordLength <= 128)) {

  console.log("Good passwordLength = " + passwordLength);
  newPassword.length = passwordLength;

  } else {
    console.log("BAD passwordLength = " + passwordLength);
    window.alert("You need to provide a valid length. Please try again.");
    // use return to call it again and stop the rest of this function from running
    getPasswordLength();
  }
};

var getDesiredChars = function() {
  newPassword.uppercase = window.confirm("Should your password use 'UPPPECASE' letters?");
  newPassword.lowercase = window.confirm("Should your password use 'lowercase' letters?");
  newPassword.numeric = window.confirm("Should your password use 'Numeric' characters?");
  newPassword.specialChar = window.confirm("Should your password use 'Special' characters?");
 
};


function generatePassword() {
  // Declare variables
  
  // Get desired password length 
  
  // The following retuns "undefined" if bad answers are given first.
  // newPassword.length = getPasswordLength();
  // This call works
  getPasswordLength();
  console.log("Complete new.password.length = " + newPassword.length);

  // Get desired acceptable characters
  getDesiredChars();
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
