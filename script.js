// Assignment Code
var generateBtn = document.querySelector("#generate");


// Possible password charaters for generator 
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "/", "?", "]", "[", "{", "}", "|", "~", "=", "+", ";", ":"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// The Function that will generate the password
function generatePassword() {
  var yourPassword = [];
  var finalarray = [];
  var separator = "";

  var passwordlenght = prompt("How many characters do you want your password to be? Enter a number from 8-128");

  if(passwordlenght < 8 || passwordlenght>128 || isNaN(passwordlenght)) {
    alert("The number you chose is not valid. Try again!!!")
  } else{
    var totalcharacters;

    var lowercase = confirm("Do you want to include lowercase letters in your password?");
    if(lowercase) {
      totalcharacters = alpha
    };

    var uppercase = confirm("Do you want to include uppercase letters in your password?");
    if(uppercase) {
      totalcharacters = totalcharacters.concat(alphaUppercase)
    };

    var numbers = confirm("Do you want to inclde numbers in your password?");
    if(numbers) {
      totalcharacters.concat(numbers)
    };

    var sCharacters = confirm("Do you want to include special characters in your password?");
    if(sCharacters) {
      totalcharacters =totalcharacters.concat(specialCharacters)
    };

    if(totalcharacters === undefined) {
      return alert("Please choose at least one password criteria. Press Generate password to try again.");
    
    }

    while (passwordlenght >= finalarray.length) {
      finalarray.push(totalcharacters[Math.floor(Math.random() *totalcharacters.length)]);
    }

    yourPassword = finalarray.join(separator);
    return yourPassword
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
