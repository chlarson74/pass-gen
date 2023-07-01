// Assignment Code
// create variable strings for the computer to choose characters from
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var listChar = [];

//code provided by UCB bootcamp
var generateBtn = document.querySelector("#generate");

// Write password to the #password input -- code provided by UCB bootcamp
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
 // end code provided by UCB bootcamp
 

function generatePassword() {
    //clearing arrays
    var password = "";
    listChar = [];

    //prompt user for length of password characters
    var charLength  = parseInt(prompt("Choose the length of your password. Between 8 and 128 characters"));
    // be sure that the user followed instructions
    if (charLength >= 8 && charLength <=128) {
        alert("Your password is " + charLength + " characters long.");
    // if user didn't indictate a correct length return to start    
    } else {
        alert("Please choose a number between 8 and 128");
        return;
    }

    //confirm special character
    var confirmSpec = confirm("Use special characters?");
    if (confirmSpec) {
        listChar=listChar.concat(specialChar);
    }
   //confirm lowercase character
   var confirmLow = confirm("Use lowercase characters?");
   if (confirmLow) {
       listChar=listChar.concat(lowerCaseChar);
   }
   //confirm upppercase character
   var confirmUpper = confirm("Use uppercase characters?");
   if (confirmUpper) {
       listChar=listChar.concat(upperCaseChar);
   }
   //confirm number character
   var confirmNumber = confirm("Use number characters?");
   if (confirmNumber) {
       listChar=listChar.concat(numberChar);
   }

   //alert that at least one selector has to be chosen
   if (listChar.length===0) {
    alert("At least one character type must be selected");
    return
   }
   //math random and math floor are used to create the random password based on user's choices
   for (var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersLength);
    password += listChar.charAt(randomIndex);
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);

//PSEUDOCODE PLANNING NOTES:
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
//create a password variable that is an empty string - like wins = zero in the rps project

//upend this character to our password -- MAIN THRUST OF THE HOMEWORK - multiple steps

//generate a random number between 0 and length of our available pool characters array
//create a variable called availableChars - this will be the combined options from the users preferences
//select one element from availableChars -
//array name at index random - newChar = availableChars[randomNum] -- TA Greg helped with is advice
//after the element is selected append it to the password
//building the password character by character - run to the specific lenth the user selected
//return the password that is created