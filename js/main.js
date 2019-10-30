const choices = document.querySelectorAll('.choice');
const score =  document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const closeButton = document.getElementById('closeButton');
const modal = document.querySelector('.modal');

const scoreBoard = {
    player: 0,
    cpu: 0
}

function play(e){
    // show the restart button
    restart.style.display = "inline-block";
    
    const playerchoice = e.target.id;
    const cpuChoice = getCPUChoice();
    const winner = getWinner(playerchoice, cpuChoice);

    showWinner(winner, cpuChoice);
}

// use random method to get CPU choice
function getCPUChoice(){
    const random = Math.random();
    if(random < 0.34){
        return "fire";
    };
    
    if(random <= 0.67){
        return "water";
    };

    return "grass";
}

// find the winner
function getWinner(playerchoice, cpuChoice){
    if(playerchoice === cpuChoice){
        return "draw";
    }
    if(playerchoice === "fire"){
        if(cpuChoice === "water"){
            return "cpu";
        }
        else{
            return "player";
        }
    }
    if(playerchoice === "water"){
        if(cpuChoice === "grass"){
            return "cpu";
        }
        else{
            return "player";
        }
    }
    if(playerchoice === "grass"){
        if(cpuChoice === "fire"){
            return "cpu";
        }
        else{
            return "player";
        }
    }
}

function showWinner(winner, cpuChoice){
    if(winner === 'player'){
        scoreBoard.player++;

        // show modal
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <p>CPU chose ${cpuChoice}</p>
            <img class="icon" src="img/${cpuChoice}.png" alt="${cpuChoice}">
        `;
    }
    else if(winner === 'cpu'){
        scoreBoard.cpu++;

        // show modal
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <p>CPU chose ${cpuChoice}</p>
            <img class="icon" src="img/${cpuChoice}.png" alt="${cpuChoice}">
        `;
    }
    else{
        // show modal
        result.innerHTML = `
            <h1>It a Draw</h1>
            <p>CPU chose ${cpuChoice}</p>
            <img class="icon" src="img/${cpuChoice}.png" alt="${cpuChoice}">
        `;
    }

    // update the score in the html page
    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>CPU: ${scoreBoard.cpu}</p>
    `;

    // show the modal
    modal.style.display = 'block';
}

// close the modal
function closeModal(e){
    // excute only if they click on the modal background or the close buttom
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

function closeModalButton(){
    modal.style.display = 'none';
}

// reset the score board
function restartGame(){
    scoreBoard.player = 0;
    scoreBoard.cpu = 0;

    // reset the score in the html page
    score.innerHTML = `
        <p>Player: 0</p>
        <p>CPU: 0</p>
    `;

    // hide the restart button
    restart.style.display = "none";
}

// add event listeners to all choices
choices.forEach(choice => choice.addEventListener('click', play));

// add event listeners to the close button for modal
closeButton.addEventListener('click', closeModalButton);

// add event listeners when clicking outside of the modal area
window.addEventListener('click', closeModal);

// add event listeners to the restart button
restart.addEventListener('click', restartGame);