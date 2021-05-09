'use strict'

import {$} from '../js/dom.js';


/*
This script has mostly static functions
In respect of Kotlins fun keyword
*/


//old button
//const button = document.getElementById('nightswitch');


// press button for click function
export const selectPlace = (id, func) => {
    const b = $({id: id})
    b.addEventListener('click', func)   
}

export const createArticle = () => {
    const main = document.getElementById('main');
    main.innerHTML = null;
    const article = document.createElement('article')
    main.appendChild(article);
    
    return article
    
}




// log shortcut
export const log = msg => console.log(msg);

// check if accessed from mobile device
export const mobileCheck = () => {
    let mobile = false;
    if ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) ){
        mobile = true;
    }
    if (mobile){
        $({c: 'mobile-only'}).classList.remove('hidden');
    }
}

// darkmode
export const darkmode = () => {
    const main = $({id: 'main'})
    main.classList.toggle('grey');
    const container = $({id: 'container'})
    container.classList.toggle('black'); 
}

export const initmain = () => {
    mobileCheck()
    darkmode()
}
