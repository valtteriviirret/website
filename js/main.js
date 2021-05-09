'use strict'

import {mobileCheck} from '../js/fun.js';
import {listen} from '../js/fun.js';
import {createArticle} from '../js/fun.js';
import {darkmode} from '../js/fun.js';
import Proj from '../js/proj.js';

mobileCheck()



// my works here
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()
    new Proj('clock.html', 'Niilo22 kertoo kellon', ul)
    new Proj('calculator.html', 'Laskin', ul)
    new Proj('whack-a-mole.html', 'Osu Niiloon peli', ul)
    new Proj('niilosound.html', 'Hassuja ääniä', ul)
    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hei, olen Valtteri';
    const img = document.createElement('img');
    img.src = '//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg';
    img.alt = 'Valtteri';
    const p = document.createElement('p');
    p.innerHTML = 'viirretvaltteri@gmail.com';
    const a = document.createElement('a');
    a.href = 'https://github.com/valtteriviirret';
    a.innerHTML = 'https://github.com/valtteriviirret';
    article.appendChild(h1);
    article.appendChild(img);
    article.appendChild(p);
    article.appendChild(a);
    main.appendChild(article);
}

listen('info', info)
listen('stuff', myworks)
listen('nightswitch', darkmode)

