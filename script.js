"use strict";

let guess = 0;
let hits = 0;
let guesses = 0;
let gameover = false;
let fleet;
let wins = 0;


class Battleship {
    constructor(positionA, positionB, positionC) {
        this.positionA = positionA;
        this.positionB = positionB;
        this.positionC = positionC;
    }
}

function createBattleships(amount) {
    /*
        let positionY = Math.floor(Math.random() * 4) + 1;
        //TODO fix dead zone 00;
        let positionX = Math.floor(Math.random() * 4) + 1;
        //TODO add function to avoid same positions in the fleet
         let coordinates1 = String(positionY) + String(positionX);
        positionX = Number(positionX + 1);
        let coordinates2 = String(positionY) + String(positionX);
        positionX = Number(positionX + 1);
        let coordinates3 = String(positionY) + String(positionX);

        //let battleship = new Battleship(Number(coordinates1), Number(coordinates2), Number(coordinates3));
    */
    let fleet = [];

    for (let i = 0; i < amount; i++) {
        let positionY = null;
        let positionX = null;

        let rndY = Math.floor(Math.random() * 5) + 1;
        switch(rndY) {
            case 1: {
                positionY = String(0);
                break;
            }
            case 2: {
                positionY = String(1);
                break;
            }
            case 3: {
                positionY = String(2);
                break;
            }
            case 4: {
                positionY = String(3);
                break;
            }
            case 5: {
                positionY = String(4);
                break;
            }
            case 6: {
                positionY = String(5);
                break;
            }
            case 7: {
                positionY = String(6);
                break;
            }
        }

        let rndX = Math.floor(Math.random() * 5) + 1;
        switch(rndX) {
            case 1: {
                positionX = String(0);
                break;
            }
            case 2: {
                positionX = String(1);
                break;
            }
            case 3: {
                positionX = String(2);
                break;
            }
            case 4: {
                positionX = String(3);
                break;
            }
            case 5: {
                positionX = String(4);
                break;
            }
            case 6: {
                positionX = String(5);
                break;
            }
            case 7: {
                positionX = String(6);
                break;
            }
        }

        let convertedPositionX = Number(positionX);
        let positionXNr2 = convertedPositionX + 1;
        let positionXNr3 = convertedPositionX + 2;
        positionXNr2 = String(positionXNr2);
        positionXNr3 = String(positionXNr3);

        let battleship = new Battleship(positionY + positionX, positionY + positionXNr2, positionY + positionXNr3);

        fleet[i] = battleship;
    }

    return fleet;
}

class View {
    displayMessage(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerText = msg;
    };
    displayHit(location) {
        let locationElement = document.getElementById(location);
        locationElement.setAttribute("class", "hit");
    };
    displayMiss(location) {
        let locationElement = document.getElementById(location);
        locationElement.setAttribute("class", "miss");
    };
}

function convertAndCheckCharacters() {
    let view = new View();
    view.displayMessage(null);
    guess = guess.toUpperCase();
    if (guess.length > 2) {
        view.displayMessage("Input is to long!");
        guess = null;
    } else if (guess.substring(1) >= 0 && guess.substring(1) < 7) {
        switch (guess.charAt(0)) {
            case 'A':
                guess = "0" + guess.substring(1);
                break;
            case 'B':
                guess = "1" + guess.substring(1);
                break;
            case 'C':
                guess = "2" + guess.substring(1);
                break;
            case 'D':
                guess = "3" + guess.substring(1);
                break;
            case 'E':
                guess = "4" + guess.substring(1);
                break;
            case 'F':
                guess = "5" + guess.substring(1);
                break;
            case 'G':
                guess = "6" + guess.substring(1);
                break;
            default:
                view.displayMessage("Only A, B, C, D, E, F or G are correct inputs for the first character!");
                guess = null;
                break;
        }
    } else {
        view.displayMessage("Only numbers between 0 and 6 are correct inputs for the second character!");
        guess = null;
    }
}

function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    guess = guessInput.value;
    convertAndCheckCharacters(guess);

    if(guess != null) {
        shoot(guess);
        if (checkGameOver()) {
            alert(`GAME OVER! YOU WON! ${hits} hits and ${guesses} guesses.`)
            resetBoard();
            wins++;
            fleet = createBattleships(2);
            console.log(fleet);
        }
    }
}

function shoot(guess) {
    let view = new View();

    if (checkIfPositionGotAlreadyHit(guess)) {
        view.displayMessage("You already shot at this position!");
        guess = null;
    } else {
        for (let i = 0; i <= fleet.length -1; i++) {
            let battleShip = fleet[i];
            if (battleShip.positionA == guess) {
                hits++;
                guesses++;
                view.displayHit(guess);
            } else if (battleShip.positionB == guess) {
                hits++
                guesses++;
                view.displayHit(guess);
            } else if (battleShip.positionC == guess) {
                hits++;
                guesses++;
                view.displayHit(guess);
            }
        }
    }

    let position1 = document.getElementById(guess);
    if (position1.getAttribute("class") === null) {
        guesses++;
        let view = new View();
        view.displayMiss(guess);
    }
}


function checkIfAlreadyShot(guess) {
    let element = document.getElementById(guess);
    if (element.getAttribute("class") != null) {
        return true;
    } else {
        return false;
    }
}

//todo
function checkIfPositionGotAlreadyHit(position) {
    let element = document.getElementById(position);
    if (element.getAttribute("class") == "hit" || element.getAttribute("class") == "miss") {
        return true;
    } else {
        return false;
    }
}

function checkGameOver() {
    let gameover = false;
    let count = 0;

    for (let i = 0; i < fleet.length; i++) {
        let battleShip = fleet[i];
        if (checkIfPositionGotAlreadyHit(battleShip.positionA) && checkIfPositionGotAlreadyHit(battleShip.positionB) && checkIfPositionGotAlreadyHit(battleShip.positionC)) {
            count++;
        }
    }

    if (count === fleet.length) {
        return true;
    } else {
        return false;
    }
}


function resetBoard() {
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 7; x++) {
            let id = String(i) + String(x);
            let element = document.getElementById(id);
            element.setAttribute("class", null);
        }
    }
}

function init() {
    fleet = createBattleships(2);
    console.log(fleet);
}


window.onload = init;




