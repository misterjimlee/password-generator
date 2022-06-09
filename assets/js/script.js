// Assignment code here
function generatePassword() {
  possibleChar = "";
  lowerChar = "";
  upperChar = "";
  numberChar = "";
  specialChar = "";
  passwordLength = 0;
  password = "";
  
  for(i = 32; i < 127; i++) {
    if (i < 123 && i > 96) {
      lowerChar += String.fromCharCode(i);
    } else if (i < 91 && i > 64) {
      upperChar += String.fromCharCode(i);
    } else if (i < 58 && i > 47) {
      numberChar += String.fromCharCode(i);
    } else {
      specialChar += String.fromCharCode(i);
    }
  }

  while (true) {
    while (true) {
      lengthPrompt = window.prompt("How long of a password do you want?");
      lengthPrompt = parseInt(lengthPrompt);
      if (lengthPrompt >= 8 && lengthPrompt <= 128) {
        passwordLength = lengthPrompt;
        break;
      } else {
        window.alert("Invalid Length! (must be at least 8 characters and no more than 128)");
      }
    }
    
    while (true) {
      
      checkConfText = "You want to create a password " + passwordLength + " characters long using:\n\n";
      
      lowerConf = window.confirm("Include lowercase characters?");
      upperConf = window.confirm("Include uppercase characters?");
      numberConf = window.confirm("Include numbers?");
      specialConf = window.confirm("Include special characters?");
      
      if (lowerConf || upperConf || numberConf || specialConf) {
        if (lowerConf) { checkConfText += "Lowercase characters\n" };
        if (upperConf) { checkConfText += "Uppercase characters\n" };
        if (numberConf) { checkConfText += "Numbers\n" };
        if (specialConf) { checkConfText += "Special characters\n" };
        break;
      } else {
        window.alert("You must include at least one character type!");
      }
    }
    
    checkConfText += "\nGenerate password?";
    checkConf = window.confirm(checkConfText);
    if (checkConf) {
      break;
    }
  }
  

  if (lowerConf) {
    possibleChar += lowerChar;
  }
  if (upperConf) {
    possibleChar += upperChar;
  }
  if (numberConf) {
    possibleChar += numberChar;
  }
  if (specialConf) {
    possibleChar += specialChar;
  }
  
  
  for (var i = 0; i < passwordLength; i++) {
    randomNum = Math.random() * possibleChar.length;
    password += possibleChar.charAt(randomNum);
  }

  return password;
  
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