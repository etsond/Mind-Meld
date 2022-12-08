'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value );

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector(".number").textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}

document.querySelector('.check').addEventListener("click", function(){
    const guess = (document.querySelector(".guess").value);
    
    //no input
    if(!guess){
        // document.querySelector(".message").textContent = '⛔️ No Number!';
        displayMessage('⛔️ No Number!');
    }
    else if (guess == secretNumber) {
        // document.querySelector(".message").textContent = "You are correct";
        displayMessage("You are correct");
        
        //style background when wins
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber;

        //keep a copy of the high score
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    //when guess is wrong
    else if( guess !== secretNumber){
    if (score > 1) {
        // document.querySelector(".message").textContent = guess > secretNumber? 'Guess is Too High Ѫ': "Guess is too low";
        displayMessage(guess > secretNumber? 'Good Guess but a bit Too High Ѫ': "Good guess but a bit too low");
        score -- ;
        document.querySelector('.score').textContent = score;
       } else{
        // document.querySelector(".message").textContent = "You Lost"
        displayMessage("You Lost");
        document.querySelector(".score").textContent = "0";
       }
    }
});
    //when the guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //     document.querySelector(".message").textContent = 'Guess is Too High Ѫ';
    //     score -- ;
    //     document.querySelector('.score').textContent = score;
    //    } else{
    //     document.querySelector(".message").textContent = "You Lost"
    //     document.querySelector(".score").textContent = "0";
    //    }
    // }
    //when the guess is too low
    // else if(guess < secretNumber){
    //     if (score > 1){
    //     document.querySelector(".message").textContent = 'Guess is too low🔻'
    //     score -- ;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //      document.querySelector(".score").textContent = "0";
    //      document.querySelector(".message").textContent = "You Lost"
    //     }
    // }
// });

//Resetting the game
document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score;
    
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value  = '';

    
});

// document.querySelector(".message")
// document.querySelector(".number").addEventListener("click", function(){
//     document.querySelector("body").style.backgroundColor = "red"
// });
