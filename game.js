let number = 13;
let userGuess = "";
let checkBtn = document.getElementById("checkBtn");
let displayInput = document.getElementById("demo");
let resultDisplay = document.getElementById("textContent");

checkBtn.addEventListener('click', checkAge);

     function checkAge(){
        userGuess = parseInt(displayInput.value);
        if (userGuess === number){
            resultDisplay.textContent = "congratualtions! you are really goood at guessing😊";
            resultDisplay.style.color = "green";
        } else {
            resultDisplay.textContent = "Try Hard";
            resultDisplay.style.color = "red";
        }
     }