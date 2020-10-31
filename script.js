// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
              "0","1","2","3","4","5","6","7","8","9"];

var symbols = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!"," ","#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
                "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~" ];


var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var characterNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9","!"," ","#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
                    "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~" ];

var upperNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9","!"," ","#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
                "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~" ];

var characterSym =[ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "!"," ","#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
                    "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~" ];

 var  numCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9" ];
                   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var charLength = prompt("How many characters do you want in your new password?");
  var whichCase = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers in your password?");
  var sym = confirm("Do you want symbols in your password?");

  // This creates a local variable for the password instead of getting the DOM object with id="password"
  let password = '';

  console.log(charLength);
  console.log(whichCase);
  console.log(num);
  console.log(sym);

  // if uppercase and numbers and symbols are confirmed 
  if(num === true && whichCase === true && sym=== true){
    for(var i = 0; i <charLength; i++){

      charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }  
//if uppercase but no numbers and no symbol
    else if(num != true && whichCase === true && sym != true){
      for(var i = 0; i <charLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }
// if numbers and symbol but no uppercase
    else if(num === true && whichCase != true && sym ===true){
      for(var i = 0; i <charLength; i++){

        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }
      

    }
    // if no numbers,symbols,or uppercase is confirmed 
    else if(num != true && whichCase != true && sym !=true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


      } 

  }
  // if uppercase and symbols but no numbers
   else if(num != true && whichCase === true && sym ===true){
    for(var i = 0; i <charLength; i++){

      charPick = characterSym[Math.floor(Math.random()*characterSym.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);


    }
  }
    // if numbers but no uppercase and symbols
    else if(num === true && whichCase != true && sym !=true){
      for(var i = 0; i <charLength; i++){
  
        charPick = numbers[Math.floor(Math.random()*numbers.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);

      }

    }
    // if numbers and uppercase but no symbols
    else if(num === true && whichCase === true && sym !=true){
      for(var i = 0; i <charLength; i++){
  
        charPick = numCase[Math.floor(Math.random()*numCase.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);

      }

    }
    //if no numbers or uppercase but no symbols
    else if(num != true && whichCase != true && sym ===true){
      for(var i = 0; i <charLength; i++){
  
        charPick = symbols[Math.floor(Math.random()*symbols.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);

      }







    }
    return password;
}