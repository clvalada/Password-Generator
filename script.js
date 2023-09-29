
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = "";

  var passwordLength = prompt("Choose password length. Password must be between 8 and 128 characters.")
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8){
    alert("Password must contain at least 8 characters.");
    return "";
  }
  if (passwordLength > 128){
    alert("Password must be less than 128 characters.");
    return"";
  }
  var incLowerCase = confirm("Would you like your password to include lower case letters?");
  if (incLowerCase){
    passwordText += lowerCase;
  }
  var incUpperCase = confirm("Would you like your password to include upper case letters?");
  if (incUpperCase){
    passwordText += upperCase;
  }
  var incNumbers = confirm("Would you like your password to include numbers?");
  if (incNumbers){
    passwordText += numbers;
  }
  var incSpecial = confirm("Would you like your password to include special characters?");
  if (incSpecial){
    passwordText += special;
  }
  for(var i = 0; i < passwordLength; i++){
    password += passwordText[Math.floor(Math.random() * passwordLength)]
  }
  // I used console.log to ensure the JS generated a password before I created the alert. 
  console.log(password)
  // I chose to display the generated password in an alert because I could not figure how to write it to the HTML page. 
  alert(password)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
