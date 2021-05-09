'use strict'

import {$} from '../js/dom.js';


/*
This script has mostly static functions
In respect of Kotlins fun keyword
*/


// press button for click function
export const listen = (id, func) => {
    $({id: id}).addEventListener('click', func)   
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
    $({id: 'main'}).classList.toggle('grey');
    $({id: 'container'}).classList.toggle('black')
}
