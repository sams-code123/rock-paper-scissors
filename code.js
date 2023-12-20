// this program is a automated rock paper scissors game that lets the user play against the computer
// computers choice is random

let player = prompt('Choose rock, paper, or scissors.');
player = player.toLowerCase();


function randInt(max) {
    // this first part returns a number 0 thru 2 if the max parameter is 3
   let rando = Math.floor(Math.random() * max);
    // I add this part so the number that is returned is 1 thru 3 if the max parameter is 3
   rando = rando + 1;
   return rando;
}

computer =  randInt(3);

function round(computer1, player1) {
    if (computer1 === 1) {
        if (player1 === 'rock'){
            return "it's a tie";
        } else if (player1 === 'paper'){
            return "player wins";
        } else if (player1 === 'scissors'){
            return "computer wins";
        }
    }
    if (computer1 === 2) {
        if (player1 === 'rock'){
            return 'computer wins';
        } else if (player1 === 'paper'){
            return "it's a tie";
        } else if (player1 === 'scissors'){
            return 'player wins';
        }
    }
    if (computer1 === 3) {
        if (player1 === 'rock'){
            return 'player wins'
        } else if (player1 === 'paper'){
            return 'computer wins';
        } else if (player1 === 'scissors'){
            return "it's a tie";
        }
    }
}

let final = round(computer, player);
console.log(final);