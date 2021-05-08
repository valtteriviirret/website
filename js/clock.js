'use strict';

const updateClock = () => {
    //luodaan kello
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //lisätään 0 jos kello on 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //luodaan kellonajasta sstringi
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + "";

    //näytetään kellonaika HTML-elementissä
    document.getElementById('clock').innerHTML= currentTimeString;
}

//funktio, jolla kello päivittyy sekunnin välein
const showclock = () => {
    setInterval(updateClock, 1000);
}

showclock();



