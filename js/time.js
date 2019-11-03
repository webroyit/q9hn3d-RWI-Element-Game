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

// set background and greeting
function setBgGreet(){
    let currentTime = new Date();
    let hour = currentTime.getHours();

    if(hour < 12){
        // morning
        document.body.style.backgroundImage = "linear-gradient(to left bottom, rgba(255, 255, 255, 0.5), rgba(157, 248, 165, 0.5)), url('./img/background-grass.jpe')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%";

        greeting.textContent = "Good Morning";
    }
    else if(hour < 18){
        // afternoon
        document.body.style.backgroundImage = "linear-gradient(to left bottom, rgba(255, 255, 255, 0.5), rgba(248, 157, 157, 0.5)), url('./img/background-fire.jpe')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%";

        greeting.textContent = "Good Afternoon";
    }
    else{
        // evening
        document.body.style.backgroundImage = "linear-gradient(to left bottom, rgba(255, 255, 255, 0.5), rgba(157, 248, 248, 0.5)), url('./img/background-water.jpe')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%";

        greeting.textContent = "Good Evening";
    }
}

// get player name from local storage
function getName(){
    if(localStorage.getItem('player-name') === null){
        playerName.textContent = 'Player1';
    }
    else{
        playerName.textContent = localStorage.getItem('player-name');
    }
}

// save the player name in the local storage
function setName(e){
    if(e.type === 'keypress'){
        // save the data when they press enter
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('player-name', e.target.innerText);

            // prevent the text from going to the next line when pressing enter
            playerName.blur();
        }
    }
    else{
        localStorage.setItem('player-name', e.target.innerText);
    }
}

playerName.addEventListener('keypress', setName);
playerName.addEventListener('blur', setName);

// run the function
showTime();
setBgGreet();
getName()