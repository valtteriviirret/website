'use strict';

const updateClock = () => {
    // creating date
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // adding 0 if its 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // making it string
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + "";

    // displaying time as html
    document.getElementById('clock').innerHTML= currentTimeString;
}

// function for updating the clock
const showclock = () => {
    setInterval(updateClock, 1000);
}

showclock();



