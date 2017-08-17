var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




var wins = 0;


var losses = 0;



var counter = 9;


var guesses = [];


    
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

function resetGame() {
                losses++;
                computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log('Game has been reset');
                counter = 9;
                guesses = [];
            }


document.onkeyup = function(event) {
   
    
    var userChoice = event.key;

    console.log("Computer Choice = " + computerChoice + " and userChoice = " + userChoice);
    
    
    if(userChoice !== computerChoice) {
        counter--;
        console.log('losses');
        guesses.push(userChoice);

        
    }      

    
        
    else if(userChoice === computerChoice) {
        wins++;

        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log('right');
        
        console.log('wins');

        guesses = [];

        counter = 9;
       
         
        
    
    
    }

    if(counter === 0) {
        resetGame();
            
            
            }
    
    
    var html =
        "<h1>Psychic Game</h1>" +
        "<h2>Can you guess the letter I'm thinking of?</h2>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + counter + "</p>" + 
        "<p>Your Guesses so far: " + guesses + "</p>";
                
       
        document.getElementById("game").innerHTML = html;
        



};