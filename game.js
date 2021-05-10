var isChoice = true;
var isResult = false;
var choiceMenu = document.getElementById("choice");
var resultMenu = document.getElementById("result");
var rightResult = document.getElementById("right");
var leftResult = document.getElementById("left");
var listeRPC = ["rock", "paper", "scissors"];

var score = 0;
var viewScore = document.getElementById("score").innerHTML = score;

function showResult(choiceValue) {
    choiceMenu.classList.toggle('hidden');
    resultMenu.classList.toggle('hidden');

    var btnPlay = document.getElementById("btn-play");
    btnPlay.style.display = "none";

    var playerChoice = leftResult.getElementsByClassName("player-choice");

    homeChoiceValue = playerChoice[i].className.split(" ")[0]
    // Affichage du choix du joueur
    for (i = 0; i < playerChoice.length; i++) {
        playerChoice[i].style.display = 'none';
        
        if(playerChoice[i].className.split(" ")[0] == choiceValue)
        {
            playerChoice[i].style.display = 'flex';
            
        }
    }

    // Rien dans la partie home choice
    var homeChoice = rightResult.getElementsByClassName("home-choice");

    for (i = 0; i < homeChoice.length; i++) {
        homeChoice[i].style.display = 'none';        
    }

    // Prendre au hasard pour le home
    var choiceHome = listeRPC[Math.floor(Math.random() * listeRPC.length)];
    setTimeout(function () {
        showHomeChoice(choiceHome);
        document.getElementById("without").style.display = "none";
        btnPlay.style.display = "block";
        if (playerWin(choiceValue , homeChoiceValue) == "gagne") {
            score += 1;            
        }
        else if(playerWin(choiceValue , homeChoiceValue) == "egal") {
            score += 0.5;
        }
        document.getElementById("score").innerHTML = score;

    }, 1000);

    
}

function showHomeChoice(choice) {

    var homeChoice = rightResult.getElementsByClassName("home-choice");

    // Affichage du choix du joueur
    for (i = 0; i < homeChoice.length; i++) {
        if(homeChoice[i].className.split(" ")[0] == choice)
        {
            homeChoice[i].style.display = 'flex';
        }
    }
}

function playerWin(playerChoice, homeChoice) {
    if (playerChoice == "rock") {
        switch (homeChoice) {
            case "scissors":
                return "gagne";
            case "paper":
                return "perdu";
        }
    }

    if (playerChoice == "paper") {
        switch (homeChoice) {
            case "rock":
                return "gagne";
            case "scissors":
                return "perdu";
        }
    }

    if (playerChoice == "scissors") {
        switch (homeChoice) {
            case "rock":
                return "gagne";
            case "paper":
                return "perdu";
        }
    }

    else if(playerChoice == homeChoice){
        return "egal";
    }
}