const userScore = document.getElementById('user-score');
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const scoreBoard = document.querySelector('.score-board');
const choices = ['rock', 'paper', 'scissor'];
let userChoice = '';
let computerChoice = '';

game_start();

function game_start()
{
    rock.addEventListener('click', function () {
        user_choice('rock');
        computerChoice();
    });

    paper.addEventListener('click', function () {
        user_choice('paper');
        computerChoice();
    });

    scissor.addEventListener('click', function () {
        user_choice('scissor');
        computerChoice();
    });

}

function user_choice(choice){
    userChoice = choice;
}

function computer_choice()
{
    let choice = Math.floor(Math.random() * 3)
    computerChoice = choices[choice];
}

function verify_game()
{
    switch (userChoice + " " + computerChoice) {
      case "rock scissor":
      case "paper rock":
      case "scissor paper":
        user_win();
        break;

      case "scissor rock":
        case "rock paper":
      case "scissor paper":
        user_win();
        break;

      case "rock rock":
      case "paper paper":
      case "scissor scissor":
        draw();
        break;
    }
}

function user_win()
{

}

function computer_win()
{

}

function draw(){

}