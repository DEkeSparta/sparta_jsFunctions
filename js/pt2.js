guessGame();

function guessGame(){
  var answer = Math.floor(Math.random()*100);
  var guesses = 0;
  var correct = false;
  var guess;
  var text = "Guess a number, from 0 to 99";

  while(!correct){
    guess = parseInt(prompt(text));
    guesses++;
    if(isNaN(guess)) text = "That's not a number!";
    else if(guess==answer) correct = true;
    else if(guess>answer) text = "TOO BIG!!!";
    else text = "...too small...";
  }
  alert("You guessed it! It's "+ answer + "!");
  alert("And it only took you " + guesses + " tries.");
}
