// this program is a automated rock paper scissors game that lets the user play against the computer
// computers choice is random

// note to self: add a function that prompts user input and checks spelling and case



function randInt(max) {
    // this first part returns a number 0 thru 2 if the max parameter is 3
   let rando = Math.floor(Math.random() * max);
    // I add this part so the number that is returned is 1 thru 3 if the max parameter is 3 instead of 0 thru 2
   rando = rando + 1;
   return rando;
}



// this function calculates 1 round of rock paper scissors and returns the outcome as "player wins", "computer wins" or "it's a tie"
// note to self: this does not account for misspelling
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



// this function runs 5 rounds of rock paper scissors and returns the winner
// note to self: this does not account for misspelling but it is case insensitive
function best5() {
    let count = 0;
    let game = "none";
    let human = 0;
    let machine = 0;
    while (count < 5) {
        let player = prompt('Choose rock, paper, or scissors.');
        player = player.toLowerCase();
        computer =  randInt(3);
        game = round(computer, player);
        if (game != "it's a tie"){
            count++;
            if (game === 'player wins'){
                human++;
            }
            if (game === 'computer wins'){
                machine++;
            }
        }
    }
    if (human > machine){
        return "you win best of 5";
    } else {
        return 'computer wins best of 5';
    }
}




/////////////////////////////////////////////////////////////////



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

computer = 0;
player = 'none';
final = 'none';
sum = 0;

pwins = 0;
cwins = 0;
ties = 0;

const win = document.querySelector('#win')
const result = document.createElement('p');

const total = document.querySelector('#total');
const tot = document.createElement('p');

const ending = document.querySelector('#ending');
const ender = document.createElement('p');


rock.addEventListener('click', () => {
    computer = randInt(3);
    player = 'rock';
    final = round(computer, player);
    console.log(final)
    sum++;

   if (final === 'player wins'){
        pwins++;
   } else if (final === 'computer wins'){
        cwins++;
   } else if (final === "it's a tie"){
        ties++;
   }

    result.classList.add('result');
    result.textContent = final;
    win.appendChild(result);

    tot.classList.add('tot');
    tot.textContent = sum;
    total.appendChild(tot);

    if (sum >= 5) {
        ender.classList.add('ender');

        if (pwins > cwins && pwins > ties){
            ender.textContent = 'player wins match!';
        } else if (cwins > pwins && cwins > ties){
            ender.textContent = 'computer wins match!';
        } else if (ties >= pwins && ties > cwins){
            ender.textContent = "It's a tie match!";
        }
        ending.appendChild(ender);
    }
});

paper.addEventListener('click', () => {
    computer = randInt(3);
    player = 'paper';
    final = round(computer, player);
    console.log(final)
    sum++;

    if (final === 'player wins'){
        pwins++;
   } else if (final === 'computer wins'){
        cwins++;
   } else if (final === "it's a tie"){
        ties++;
   }

    result.classList.add('result');
    result.textContent = final;
    win.appendChild(result);

    tot.classList.add('tot');
    tot.textContent = sum;
    total.appendChild(tot);

    if (sum >= 5) {
        ender.classList.add('ender');

        if (pwins > cwins && pwins > ties){
            ender.textContent = 'player wins match!';
        } else if (cwins > pwins && cwins > ties){
            ender.textContent = 'computer wins match!';
        } else if (ties >= pwins && ties > cwins){
            ender.textContent = "It's a tie match!";
        }
        ending.appendChild(ender);
    }
});

scissors.addEventListener('click', () => {
    computer = randInt(3);
    player = 'scissors';
    final = round(computer, player);
    console.log(final)
    sum++;

    if (final === 'player wins'){
        pwins++;
   } else if (final === 'computer wins'){
        cwins++;
   } else if (final === "it's a tie"){
        ties++;
   }

    result.classList.add('result');
    result.textContent = final;
    win.appendChild(result);

    tot.classList.add('tot');
    tot.textContent = sum;
    total.appendChild(tot);

    if (sum >= 5) {
        ender.classList.add('ender');

        if (pwins > cwins && pwins > ties){
            ender.textContent = 'player wins match!';
        } else if (cwins > pwins && cwins > ties){
            ender.textContent = 'computer wins match!';
        } else if (ties >= pwins && ties > cwins){
            ender.textContent = "It's a tie match!";
        }
        ending.appendChild(ender);
    }
});



