"use strict";

let guess = 0;
let hits = 0;
let guesses = 0;
let gameover = false;
let fleet;

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

function convert() {
    guess = guess.toUpperCase();
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
            let textElement = document.getElementById("messageArea");
            textElement.innerText = "You can only choose A - G!"
            guess = null;
            break;
    }
}

function shoot(guess) {

}

function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    guess = guessInput.value;
    console.log(fleet);
    convert(guess);
    if(guess != null) {
        console.log(guess);
        //shoot(guess);
    }






}

function init() {
    fleet = createBattleships(2);

}



window.onload = init;




