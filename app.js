var score = [0, 0];     // Array to store the total score of individual players
var roundScore = 0;     // Variable to store the current round score
var activePlayer = 0;   // Variable to store the current active player

document.querySelector('.btn-roll').addEventListener('click', function() {

    // Geneating a random number between 1 to 6 when the current player rolls the dice
    var dice = Math.floor((Math.random() * 6) + 1);

    // Showing the dice face with of the number generated in UI
    document.querySelector('.dice').src = 'assets/images/dice/dice-' + dice + '.png';
    
    // Checking if the roll of the dice has generated a 1
    if (dice !== 1) {

        // When the dice roll produced a non-1 number, adding the number to the round score of the current player and showing in UI
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    } else if (dice === 1) {

        // When the dice roll produced a 1, we rest the round score of the player to 0
        roundScore = 0;

        // Change the current player ('activePlayer')

        if(activePlayer === 0) {
            activePlayer = 1;
        }
        else if(activePlayer === 1) {
            activePlayer = 0;
        }

        // Set Round Score in UI To 0

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // Shift active class to the panel of the new current player

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    // 1. Stores the round score to the player's total score and show it in UI

    score[activePlayer] = score[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    // 2. Reset round score and show it in UI

    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    // 3. Change active player and shift the active player panel

    if(activePlayer === 0)
        activePlayer = 1;
    else if(activePlayer === 1)
        activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

});