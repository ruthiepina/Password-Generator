// Assignment code here
const Criteria_Number = 4;
const Password_Min_Length = 8;
const Password_Max_Length = 128;

var criteria2 = [
   {
      name: "lowercase",
      selected: false,
      totalChars: 0,
      assignedChars: 0,
      setOfChars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"],
   },
];

//* Prompts user for pwd length and validates if its within range.
function getLengthCriteria(pwdLength) {
   var pwdLength = 0;
   // console.log(pwdLength);
   while (pwdLength > Password_Max_Length || pwdLength < Password_Min_Length) {
      pwdLength = prompt("Enter password length, should be between 8-128 characters");
      // console.log("inside while", pwdLength);
   }
   return pwdLength;
}

function getCharTypes(CriteriaSelection) {}

function askCriteria() {
   //TODO: asl for password length
   var pwdLength = 0;
   pwdLength = getLengthCriteria(pwdLength);
   //TODO: ask for char type
   var CriteriaSelection = { uppercase: false, lowercase: false, numeric: false, specialChar: false };
   getCharTypes();
   //TODO: validation of criteria selection
   //TODO: generate password
   //TODO: display password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {}

// Write password to the #password input
function writePassword() {
   askCriteria();
   //TODO: ask for criteria

   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
