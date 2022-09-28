document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

function runGame(gameType){

    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition"){
        disaplayAdditionQuestion(num1, num2);    
    } else {
        alert (`Unkown ${gameType}`);
        throw `Unknown ${gameType}. Aborting!!`;
    }

}

function checkAnswer(){
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        incrementScore();
    } else {
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer(){
    
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText

    if (operator === "+"){
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unemplemented operator ${operator}`);
        throw (`Unemplemented operator ${operator}. Aborting`)
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function disaplayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

// function disaplaySubtractQuestion(){

//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "-";

// }

// function disaplayMultiplyQuestion(){

//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "x";

// }

// function disaplayDivideQuestion(){

//     document.getElementById("operand1").textContent = operand1;
//     document.getElementById("operand2").textContent = operand2;
//     document.getElementById("operator").textContent = "÷";

// }