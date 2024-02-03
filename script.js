let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userPara = document.querySelector("#user-score")
const compPara = document.querySelector("#computer-score")


const genCompchoice = () => {
    const option = ["rock", "paper", "scissor"]
    let randomindx = Math.floor(Math.random() * 3)
    return option[randomindx]
}
const drawgame = () => {
    msg.innerHTML = "Game draw! play again"
    msg.style.backgroundColor = "#020237"
}
const showWinner = (userWin, usreChoice, compchoice) => {
    if (userWin) {
        userScore++;
        userPara.innerHTML = userScore;
        msg.innerHTML = `Yay you won your ${usreChoice} beats computer ${compchoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compPara.innerHTML = compScore;
        msg.innerHTML = `You lose!! computer's ${compchoice} beats your ${usreChoice}`
        msg.style.backgroundColor = "red"
    }
}
const playGame = (usreChoice) => {
    //now we generate random choice by comp
    const compchoice = genCompchoice();
    if (usreChoice === compchoice) {
        //when user and comp choice are same
        drawgame();
    } else {
        let userWin = true;
        if (usreChoice === "rock") {
            //paper,scissor
            userWin = compchoice === "paper" ? false : true;
        } else if (usreChoice === "paper") {
            //rock,scissor
            userWin = compchoice === "rock" ? true : false;
        } else {
            //rock,paper
            userWin = compchoice === "paper" ? true : false;
        }
        showWinner(userWin, usreChoice, compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const usreChoice = choice.getAttribute("id")
        playGame(usreChoice);
    })
})