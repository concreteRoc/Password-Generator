// Assignment Code
var generateBtn = document.querySelector("#generate");


// Possible password charaters for generator 
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var aphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "/", "?", "]", "[", "{", "}", "|", "~", "=", "+", ";", ":"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


function generatePassword() {
  var yourPassword = [];
  var finalarray = [];
  var separator = "";

  var passwordlenght = prompt("How many characters do you want your password to be? Enter a number from 8-128");

  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
