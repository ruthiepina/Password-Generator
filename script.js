// Assignment code here
const Criteria_Number = 4;
const Password_Min_Length = 8;
const Password_Max_Length = 128;

var pwdData = [
   {
      name: "uppercase characters",
      selectedCriteria: false,
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

function getCharTypes() {
   for (var i = 0; i < pwdData.length; i++) {
      pwdData[i].selectedCriteria = confirm("Do you want to use " + pwdData[i].name + " to create a password?");
   }
}

//* Initialize selected criteria array.
for (var i = 0; i < pwdData.length; i++) {
   pwdData[i].selectedCriteria = false;
}

var pwdLength = 0;

function askCriteria() {
   //TODO: asl for password length
   pwdLength = getLengthCriteria();
   console.log("My value: ", pwdLength);
   //TODO: ask for char type
   getCharTypes();
   console.log(pwdData);
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
