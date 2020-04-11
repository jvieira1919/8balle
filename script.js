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

function generatePassword() {
  var generatedPassword = "";
  var passwordLength = prompt("Enter password length. No less than 8 and no more than 128 characters.");
  var passQ1 = confirm("Do you want special charactors?");
  var passQ2 = confirm("Do you want uppercase?");
  var passQ3 = confirm("Do you want lowercase?");
  var passQ4 = confirm("Do you want numbers?");
  var minCount = 8;
  var minNumb = "";
  var minLower = "";
  var minUpper = "";
  var minSymbol = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numb = "123456789";
  var specialChara = "!@#$%^&*()";
  var usercharacters = "";

  return generatedPassword
}
console.log(usercharacters);

// check if user wants special characters
//add special characters to our user characters var

var functionArray = {
  //http://www.net-comber.com/charset.html
  getLowerRandom: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },

  GetUpperRandom: function () {
    return string.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

  getRandomNumber: function () {
    return string.fromCharCode(math.floor(math.random() * 10) + 48);
  },

  GetSymbolRandom: function () {
    return upper.fromCharCode(Math.floor(Math.random() * specialChara, length));
  },
}

// check if the user wants upper case chara
// add upper case

// check the length of usercharacters that its longer than 0
// if its equal to 0 prompt the user "a message to add"

// check if the length is between 8 and 128
// if thats false prompt user to enter something thats between those.

// create a loop for each character you want to add. 
// generate a letter randomly from your userchara apend that to the password sting.+




for (var i = 0; i < password.length; i++) {
  console.log(password[i]);
}

if (passQ1 === true) {
  minSymbol = functionArray.GetSymbolRandom();
  minCount++;
}

else if (passQ2 === true) {
  minLower = functionArray.getUpperRandom();
  minCount++;
}

else if (passQ3 === true) {
  minUpper = functionArray.GetLowerRandom();
  minCount++;
}

else if (passQ4 === true) {
  minNumb = functionArray.getRandomNumber();
  minCount++;
}

else(passQ1, passQ2, passQ3, passQ4 ===false ) {
  alert("you must choose at least one of the options")
}

if (password[i].length < (8) || password[i].length > 128)
  alert("your password must have more than 8 charactors or less than 128")



