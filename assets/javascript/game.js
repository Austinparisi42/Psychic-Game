var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




var wins = 0;


var losses = 0;



var counter = 9;


var guesses= [];


    
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


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
        console.log('wins');
       
        guesses = []; 
        
    
    
    }
    
    var html =
        "<h1>Psychic Game</h1>" +
        "<h2>Can you guess the letter I'm thinking of?</h2>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + "guessLeft" + "</p>" + 
        "<p>Your Guesses so far: " + "guessSoFar" + "</p>";
                
       
        document.getElementById("game").innerHTML = html;
        


        if(counter === 0) {
                window.location.reload(true);
            }
    
};