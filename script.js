// Assignment Code
var generateBtn = document.querySelector("#generate");

var special_chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var upper = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var generatedPassword = "";
  var char_superset = [];
  var passwordLength = parseInt(prompt("Enter password length. No less than 8 and no more than 128 characters."));
  // validate the user entered a number between 8 and 128
  var passQ1 = confirm("Do you want special charactors?");
  // confirm (yes/no) if the user wants special characters
  var passQ2 = confirm("Do you want uppercase?");
  // confirm (yes/no) if the user wants Upper case letters
  var passQ3 = confirm("Do you want lowercase?");
  // confirm (yes/no) if the user wants lower case letters
  var passQ4 = confirm("Do you want numerics?");
  // confirm (yes/no) if the user wants numerics
  // validate the user chose at least one set of alphanumerics

  // create a superset of characters.
  // if the user wants special characters. concat special_chars to the end of char_superset
  // repeat for upper, lower and numbers
  if (passQ1) {
    char_superset = char_superset.concat(special_chars)
  };

  if (passQ2) {
    char_superset = char_superset.concat(upper)
  };

  if (passQ3) {
    char_superset = char_superset.concat(lower)
  };

  if (passQ4) {
    char_superset = char_superset.concat(numeric)
  };

  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert("Your password must contain a number between 8 and 128")
    return;
  };

  if ({ passQ1 } && { passQ2 } && { passQ3 } && { passQ4 } === false) {
    alert("You must choose one of the four options")
    return;
  };

  for (var i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * passwordLength );
    generatedPassword.push(randomNumberPicked);
  }
  
  generatedPassword += randomNumberPicked;
  char_superset = generatedPassword.join("");
  UserInput(generatedPassword);
  return generatedPassword;
}

function UserInput(generatedPassword) {
  document.getElementById("password").textContent = generatedPassword;
};

// This puts the password value into the textbox


    //find a random number between 0 and the length of char_superset 
    //that number represents and index in char_superset
    //which corresponds to a character
    //add the character at that index to the end of generatedpassword
