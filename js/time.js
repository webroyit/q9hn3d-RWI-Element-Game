const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const playerName = document.getElementById('player-name');

// show time
function showTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours();          // hour is bewteen 0 to 23
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    // set AM or PM
    const midday = hour >= 12 ? 'PM' : 'AM';

    // format the hour
    hour = hour % 12 || 12;

    // display the time
    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)} ${midday}`;

    // call the function every 1 second
    setTimeout(showTime, 1000);
}

// add zero
function addZero(number){
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// run the function
showTime();