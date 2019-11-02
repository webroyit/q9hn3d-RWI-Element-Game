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
    time.innerHTML = `${hour}<span>:</span>${minute}<span>:</span>${second} ${midday}`;

    // call the function every 1 second
    setTimeout(showTime, 1000);
}

// run the function
showTime();