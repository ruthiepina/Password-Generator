// Assignment code here
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 128;

var myPassword = ""; //* Generated password.
var pwdLength = 0; //* User selected password length.

//* Array of objects for each criteria.
var pwdData = [
   {
      name: "uppercase characters", //* Prompt string.
      selectedCriteria: false, //* Criteria selected - true, criteria not selected - false.
      characterSet: [
         "A",
         "B",
         "C",
         "D",
         "E",
         "F",
         "G",
         "H",
         "I",
         "J",
         "K",
         "L",
         "M",
         "N",
         "O",
         "P",
         "Q",
         "R",
         "S",
         "T",
         "U",
         "V",
         "W",
         "X",
         "Y",
         "Z",
      ],
   },
   {
      name: "lowercase characters",
      selectedCriteria: false,
      characterSet: [
         "a",
         "b",
         "c",
         "d",
         "e",
         "f",
         "g",
         "h",
         "i",
         "j",
         "k",
         "l",
         "m",
         "n",
         "o",
         "p",
         "q",
         "r",
         "s",
         "t",
         "u",
         "v",
         "w",
         "x",
         "y",
         "z",
      ],
   },
   {
      name: "special characters",
      selectedCriteria: false,
      characterSet: [
         "!",
         '"',
         "#",
         "$",
         "%",
         "&",
         "'",
         "(",
         ")",
         "*",
         "+",
         ",",
         "-",
         ".",
         "/",
         ":",
         ";",
         "<",
         "=",
         ">",
         "?",
         "@",
         "[",
         "\\",
         "]",
         "^",
         "_",
         "`",
         "{",
         "|",
         "}",
         "~",
      ],
   },
   {
      name: "numeric characters",
      selectedCriteria: false,
      characterSet: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
   },
];

//* Prompts user for pwd length and validates if its within range PASSWORD_MIN_LENGTH - PASSWORD_MAX_LENGTH.
function getPasswordLength() {
   pwdLength = 0; //* Resets new pwd length.
   while (pwdLength > PASSWORD_MAX_LENGTH || pwdLength < PASSWORD_MIN_LENGTH) {
      pwdLength = prompt("Enter password length, should be between 8-128 characters");
   }
   return pwdLength;
}

//* Prompts for what criteria to use to generate the pwd.
function getCharTypes() {
   var chooseCriteria = false;
   //* Loops until at least ONE criteria is selected.
   while (!chooseCriteria) {
      for (var i = 0; i < pwdData.length; i++) {
         pwdData[i].selectedCriteria = confirm("Do you want to use " + pwdData[i].name + " to create a password?");
         if (pwdData[i].selectedCriteria === true) {
            chooseCriteria = true;
         }
      }
      //* Sends error message.
      if (!chooseCriteria) {
         window.alert("You didn't select at least ONE criteria. Please select at least ONE criteria.");
      }
   }
}

//* Prompts users for desired pwd length & criteria.
function askCriteria() {
   pwdLength = getPasswordLength(); //* Prompts for pwd length.
   getCharTypes(); //* Prompts for criteria selection.
}

//* Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//* Generates pwd using length and selected criteria.
function generatePassword() {
   myPassword = ""; //* Re-initialize pwd string.

   //* Loops for total pwd length.
   for (var i = 0; i < pwdLength; i++) {
      var charTypeBucketIndex = Math.floor(Math.random() * pwdData.length); //* Calculate charType (upper, lower, number, special) index.

      //* Loops until random charType bucket index is in list of selected criteria.
      while (pwdData[charTypeBucketIndex].selectedCriteria === false) {
         charTypeBucketIndex = Math.floor(Math.random() * pwdData.length); //* Calculate charType (upper, lower, number, special) index.
      }

      //* Randomly selects a character from a randomly selected criteria/character set.
      var SelectedBucketCharIndex = Math.floor(Math.random() * pwdData[charTypeBucketIndex].characterSet.length);

      myPassword += pwdData[charTypeBucketIndex].characterSet[SelectedBucketCharIndex]; //* Concatenates password's characters.
   }
   return myPassword;
}

//* Write password to the #password input
function writePassword() {
   askCriteria(); //* Prompts users for desired pwd length & criteria.

   var password = generatePassword(); //* Generates password applying user inputs.

   var passwordText = document.querySelector("#password"); //* Selects element from page with id = #password.

   passwordText.value = password; //* Updates page with generated password.
}

//* Add event listener to generate password button.
generateBtn.addEventListener("click", writePassword);
