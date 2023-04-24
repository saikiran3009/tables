let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
let scoreEl = document.getElementById("score")
let score = 0;


function next(){
    firstNumber.textContent = Math.ceil(Math.random()*20);
    secondNumber.textContent = Math.ceil(Math.random()*10);

    result.textContent = "";
    userInput.value = "";
}

next()

function check(){
    let userInputValue = userInput.value
    let multiplicationOfNumbers =  parseInt(firstNumber.textContent) * parseInt(secondNumber.textContent);

    if (userInputValue == ""){
        alert("Enter the Number")
    }
    else{
        if (parseInt(userInputValue) == multiplicationOfNumbers){
            result.textContent = "Congrats!! Your right";
            result.style.color = "green";
            score += 1
        }
        else{
            result.textContent = "Failed!! Try again";
            result.style.color = "red";
        }
    }
    scoreEl.textContent = score;
}

