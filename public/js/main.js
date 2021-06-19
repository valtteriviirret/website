'use strict'

import { mobileCheck, listen, createArticle, darkmode, LINK } from './fun.js';
import Proj from './proj.js';
import { make } from './dom.js';

mobileCheck()



// my works here
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()

    // make a list of all projects. Might make later
    const projectList = [];
    
    new Proj('Kello', 'Niilo22 kertoo kellon', ul, '../js/projects/clock.js')
    new Proj('Calculator', 'Laskin', ul, '../js/projects/calculator.js')
    new Proj('whack-a-mole', 'Osu Niiloon peli', ul, '../js/projects/whack-a-mole.js')
    new Proj('Hassuja ääniä', 'Soundboard', ul, '../js/projects/niilosound.js')


    LINK('../EFTDweb/index.html', 'Pelilinkki', ul)
    

    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()
    const h1 = make('h1');
    h1.innerHTML = 'Hei, olen Valtteri';
    h1.id = 'infoh1'
    const img = make('img');
    img.src = '//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg';
    img.alt = 'Valtteri';
    img.classList.add('center')

    article.appendChild(h1);
    article.appendChild(img);
    LINK('mailto:viirretvaltteri@gmail.com', 'viirretvaltteri@gmail.com', article);
    LINK('https://github.com/valtteriviirret', 'github.com/valtteriviirret', article);
    LINK('https://www.instagram.com/valtteriviirret/', 'instagram.com/valtteriviirret', article);
}

listen('nightswitch', darkmode)
listen('info', info)
listen('stuff', myworks)


