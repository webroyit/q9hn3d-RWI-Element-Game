const choices = document.querySelectorAll('.choice');
const score =  document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('modal');

const scoreBoard = {
    player: 0,
    cpu: 0
}

function play(e){
    // show the restart button
    restart.style.display = "inline-block";
    
    const playerchoice = e.target.id;
    const cpuChoice = getCPUChoice();

    console.log(playerchoice, cpuChoice);
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

// add event listeners to all choices
choices.forEach(choice => choice.addEventListener('click', play));