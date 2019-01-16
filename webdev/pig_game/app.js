/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, sixFlag, winningScore;

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    winningScore = 20;
    document.querySelector('.winningScore').style.display = 'block';
    

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    for(var i = 0; i < 2; i++) {
        document.getElementById('score-' + i).textContent = '0';
        document.getElementById('current-' + i).textContent = '0';
        document.getElementById('name-' + i).textContent = 'Player' + (i + 1);
        document.querySelector('.player-' + i + '-panel').classList.remove('active');
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
    }
        document.querySelector('.player-0-panel').classList.add('active');
}

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        var dice2DOM = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        // 3. Update the round score IF the rolled number was NOT a 1
        
        if(dice !== 1 && dice2 !== 1) {
            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log("Dice One: " + dice);
            console.log("Dice Two: " + dice2);
            
            // Check for two sixes in a row or in a round.
            
            if(dice === 6 && dice2 === 6) {
                console.log('Rolled six twice. What bad luck!!' + " Player: " + activePlayer);
                console.log(dice);
                console.log(dice2);
                // Set active player's score to 0 then switch to next player
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = '0';
                // Next player
                nextPlayer();
            } else if(dice === 6 || dice2 === 6) {
                    if(!sixFlag) {
                        sixFlag = true;
                        console.log("Six flagged once");
                        console.log(sixFlag);
                    } else if(sixFlag) {
                        console.log(dice);
                        console.log(dice2);
                        console.log("Two sixes rolled this round" + " Player: " + activePlayer);

                        // Set active player's score to 0 then switch to next player
                        scores[activePlayer] = 0;
                        document.getElementById('score-' + activePlayer).textContent = '0';
                        // Next player
                        nextPlayer();
                    }
                }
        } else {
            // Next player
            console.log("Dice One: " + dice);
            console.log("Dice Two: " + dice2);
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
        if(sixFlag) {
            sixFlag = false;
        }
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.winningScore').style.display = 'none';
            document.querySelector('.winningScore').value = '';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }   
});

function nextPlayer() {
    if(sixFlag) {
        sixFlag = false;
    }
    document.getElementById('current-' + activePlayer).textContent = '0';
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    for(var i = 0; i < 2; i++) {
        document.querySelector('.player-' + i + '-panel').classList.toggle('active');
    }
}

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.winningScore').addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
            winningScore = document.querySelector('.winningScore').value;
            document.querySelector('.winningScore').style.display = 'none';
            document.querySelector('.winningScore').value = '';
            alert('New winning score set.');
        }
});