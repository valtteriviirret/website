'use strict'

import {mobileCheck, listen, createArticle, darkmode, somelink} from '../js/fun.js';
import Proj from '../js/proj.js';

mobileCheck()



// my works here
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()
    
    // in the morning make the rest of the html into js as well
    
    new Proj('Kello', 'Niilo22 kertoo kellon', ul, '../js/projects/clock.js')
    new Proj('Calculator', 'Laskin', ul, '../js/projects/calculator.js')
    new Proj('whack-a-mole', 'Osu Niiloon peli', ul, '../js/projects/whack-a-mole.js')
    new Proj('Hassuja ääniä', 'Soundboard', ul, '../js/projects/niilosound.js')
    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()

    // easy to create new from here

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hei, olen Valtteri';
    h1.id = 'infoh1';
    const img = document.createElement('img');
    img.src = '//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg';
    img.alt = 'Valtteri';
    img.classList.add('center')

    article.appendChild(h1);
    article.appendChild(img);
    somelink('mailto:viirretvaltteri@gmail.com', 'viirretvaltteri@gmail.com', article);
    somelink('https://github.com/valtteriviirret', 'github.com/valtteriviirret', article);
    somelink('https://www.instagram.com/valtteriviirret/', 'instagram.com/valtteriviirret', article);
}

listen('info', info)
listen('stuff', myworks)
listen('nightswitch', darkmode)

