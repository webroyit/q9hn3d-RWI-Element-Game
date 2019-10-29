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
    console.log(e.target.id);
}

// add event listeners to all choices
choices.forEach(choice => choice.addEventListener('click', play));