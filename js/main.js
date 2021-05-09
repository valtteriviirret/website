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
    new Proj('html/clock.html', 'Niilo22 kertoo kellon', ul)
    new Proj('html/calculator.html', 'Laskin', ul)
    new Proj('html/whack-a-mole.html', 'Osu Niiloon peli', ul)
    new Proj('html/niilosound.html', 'Hassuja ääniä', ul)
    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()

    // easy to create new from here

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hei, olen Valtteri';
    const img = document.createElement('img');
    img.src = '//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg';
    img.alt = 'Valtteri';
    const email = document.createElement('a');
    email.href = 'mailto:viirretvaltteri@gmail.com';
    email.innerHTML = 'viirretvaltteri@gmail.com';
    const a = document.createElement('a');
    a.href = 'https://github.com/valtteriviirret';
    a.innerHTML = 'https://github.com/valtteriviirret';
    article.appendChild(h1);
    article.appendChild(img);
    article.appendChild(email);
    article.appendChild(a);
    main.appendChild(article);
}

listen('info', info)
listen('stuff', myworks)
listen('nightswitch', darkmode)

