// Declare variables
let nGuesses = 0;
let randomNumber;
let userNumber;
let submitGuess = document.getElementById('submitGuess');
let guessInput = document.getElementById('guessInput');
let result = document.getElementById('result');

// Generate a random number between 1 and 100
randomNumber = Math.floor(Math.random()*100 + 1);

// Take user input and compare it to the random number
function playGame(){
    userNumber = guessInput.value;
    guessInput.value = '';
    nGuesses += 1

    if (userNumber == ''){
        window.alert('Please, enter a value before submitting ');
    }else{
        userNumber = Number(userNumber);
        if (isNaN(userNumber)){
            window.alert('Please, enter a numeric guess!')
        }
    }

    if (userNumber < randomNumber){
        result.innerHTML = 'Your guess is <strong>less</strong> than the random number';
    
    }else if(userNumber > randomNumber){
        result.innerHTML = 'Your guess is <strong>greater</strong> than the random number';

    }else if(userNumber == randomNumber){
        result.innerHTML = `Congratulations! You have guessed the number in ${nGuesses} guesses!`;
        result.style = 'color: green';
    }

}


submitGuess.onclick = function(){
    playGame()
}