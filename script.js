var generateBtn = document.querySelector("#generate");
var length = prompt("Please pick a number from 8 to 128.");
var useLowerCase = confirm("Do you want to use lowercase?");
var useUpperCase = confirm("Do you want to use uppercase?");
var specialLetters = confirm("Do you want to use special characters?");
var numbers = confirm("Do you want to use numbers?");


function generatePassword () {


characters = ("");
var result = ("");

if(useLowerCase === true) {
     characters += "abcdefghijklmnopqrstuvwxyz"}

if (useUpperCase === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}

if (specialLetters === true) {
    characters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"}

if (numbers === true) {
    characters += "0123456789"
}


var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
