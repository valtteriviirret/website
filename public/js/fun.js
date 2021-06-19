'use strict'

import { $, make } from './dom.js';


// functions used in another scripts


// press button for click function
export const listen = (id, func) => {
    $({id: id}).addEventListener('click', func)   
}


export const createArticle = () => {
    const main = $({id: 'main'});
    main.innerHTML = null;
    const article = make('article')
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
// this is more or less very bad code
export const darkmode = () => {
    $({id: 'main'}).classList.toggle('black');
    $({id: 'container'}).classList.toggle('red');
}

export const LINK = (href, innerHTML, append) => {
    const tag = make('a');
    tag.href = href
    tag.innerHTML = innerHTML
    tag.classList.add('infolink');
    append.appendChild(tag)
}

