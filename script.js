// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChara = "!@#$%^&*()";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = prompt("Enter password length. No less than 8 and no more than 128 characters.")
var passQ1 = confirm("Do you want special charactors?")
var passQ2 = confirm("Do you want uppercase?")
var passQ3 = confirm("Do you want lowercase?")
var passQ4 = confirm("Do you want numbers?")
var minCount=8;


for (var i = 0; i < password.length; i++) {
  console.log(password[i]);

  if (password[i].length < (8) || password[i].length > 128)
    alert("your password must have more than 8 charactors or less than 128")
}


