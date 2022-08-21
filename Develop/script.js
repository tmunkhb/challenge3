// Assignment code here
function generatePassword() {
  
  //Prompt for length
  while (true) {
      
    var userInput = window.prompt("How long do you want your password to be?")
        
    // If user canceled the prompt
    if (userInput === null) {
    return
    }
            
    var passwordLength = parseInt(userInput)
        
    if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
    } else {
    break
    }
  }

  //Criteria Prompts for lowercase, uppercase, number and symbols
  var getRandomLower = window.confirm("Would you like to include lowercase letters in your password?")
  var getRandomUpper = window.confirm("Would you like to include uppercase letters in your password?")
  var getRandomNumber = window.confirm("Would you like to include numbers in your password?")
  var getRandomSymbol = window.confirm("Would you like to include symbols in your password?")

  //Lists for lowercase, uppercase, numbers and symbols
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]

  //variable to push the seleceted criteria values
  var optionsCart = []

  //Random values
  if (getRandomLower === true) {
    optionsCart.push(lowercaseList)
  }
  if (getRandomUpper === true) {
    optionsCart.push(uppercaseList)
  }
  if (getRandomNumber === true) {
    optionsCart.push(numberList)
  }
  if (getRandomSymbol === true) {
    optionsCart.push(symbolList)
  }
    
  if (optionsCart.length === 0) (
    optionsCart.push (uppercaseList)
  )

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