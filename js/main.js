'use strict'

import {initmain, selectPlace, createArticle} from '../js/fun.js';
import Proj from '../js/proj.js';

initmain()

console.log("init ok")


//töiden linkkejen dom, uusien töiden linkit tähän!
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()
    new Proj('clock.html', 'Niilo22 kertoo kellon', ul)
    new Proj('calculator.html', 'Laskin', ul)
    new Proj('whack-a-mole.html', 'Osu Niiloon peli', ul)
    new Proj('niilosound.html', 'Hassuja ääniä', ul)
    article.appendChild(ul)
}



//info sivun html
const info = () => {
    const article = createArticle()

    //const main = document.getElementById('main');
    //main.innerHTML = null;
    //const article = document.createElement('article');
    //article.id = 'infoarticle';
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

selectPlace('info', info)
selectPlace('stuff', myworks)

