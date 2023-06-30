// Assignment Code
// create variable strings for the computer to choose characters from
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var availableChars

//PHASE ONE
//what do I need to do -- create variables and get information from the user
//propmt user for a length of characters between 8 - 128 - number
//confirm user for uppperCase letters - boolean
//confirm user for lowerCase letters - boolean
//confirm user for special characters - boolean
//create a new pool of available characters based on the user's response
//PHASE TWO
//use concat to combine arrays
//variables with an array of the alphabet and specChar - math.function - look it up
//random.index - look it up - how to generate a number
//length -- review the prs project to see how rps were generated
//create a pawwword variable that is an empty string - lik wins = zero in the rps project

//upend this character to our password -- MAIN THRUST OF THE HOMEWORK - multiple steps

//generat a random number between 0 and length of our available pool characters array
//create a variable called availableChars - this will be the combined options from the users preferences
//select one element from availableChars -
//array name at index random - newChar = availableChars[randomNum] -- TA Greg helped with is advice
//after the element is selected append it to the password
//building the password character by character - run to the specific lenth the user selected
//return the password that is created 


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

