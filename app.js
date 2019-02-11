/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//declaring all the variables in the begining

var scores, activePlayer, roundScore;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//setting all the values to 0 in the begining:
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    //generates a random number between 1-6
    var dice = Math.floor(Math.random()*6)+1;
    //display the image of dice
    document.querySelector('.dice').src='dice-' + dice + '.png';
    if(scores[activePlayer] >= 100){
        console.log("palyer" + activePlayer +'is winner');
    }else{
        if(dice !== 1){
            roundScore += dice;
            //add score to current
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            //setting back the css styling for image
            document.querySelector('.dice').style.display = 'block';
            }
        else{
            //next player
            nextPlayer();
        }
    }

});

function nextPlayer(){
    roundScore = 0;
    //update the round score on the interfae
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    //change active player.
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    //add the round score to the scores
    scores[activePlayer] += roundScore;
    //update the interface
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //revert the round score backe to 0 and swap the turn.
    nextPlayer();
});



//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('.dice').style.display = 'none';
