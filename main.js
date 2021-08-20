'use strict'

import { mobileCheck, listen, createArticle, darkmode, textmodecheck } from './fun.js';
import { $, make, makeIMG, makeTEXT, LINK, linkIMG} from './dom.js';
import Proj from './proj.js';

mobileCheck();

// the very front page you see
const front = () => {
    const article = createArticle()

    // this thing makes the typing effect on front
    // only used here so not an export function like everything else   
    let i = 0;
    let txt = 'Tervetuloa Valtteri Viirteen kotisivuille!';
    let speed = 50;

    const h1 = make('h1')
    h1.id = 'maintext';

    const typeWriter = () => {
        if (i < txt.length) {
            if($({id: "maintext"}))
            {
                $({id: "maintext"}).innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }

    textmodecheck(h1)
    article.appendChild(h1)

    typeWriter()
    
    // GIF COPIED FROM:
    // https://tenor.com/view/beavis-computer-shitposting-gif-7431307
    makeIMG('/images/coding.gif', 'beavis-computer', article, 'maingif');

    const row = make('div');
    row.classList.add('row')
    
    linkIMG('https://en.wikipedia.org/wiki/C%2B%2B', 'imagecolumn', '/images/c++.png', 'C++', row)
    linkIMG('https://en.wikipedia.org/wiki/JavaScript', 'imagecolumn', '/images/javascript150.png', 'JavaScript', row)
    linkIMG('https://en.wikipedia.org/wiki/Kotlin_(programming_language)', 'imagecolumn', '/images/kotlin150.png', 'Kotlin', row)
    linkIMG('https://en.wikipedia.org/wiki/C_Sharp_(programming_language)', 'imagecolumn', '/images/csharp.png', 'C#', row)

    
    article.appendChild(row)

}



// my works here
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()

    // make a list of all projects. Might be useful later
    const projectList = [];

    new Proj('Osu Niiloon!', 'Osu Niiloon peli, JavaScript/CSS', ul, '../js/projects/whack-a-mole.js')
    //new Proj('Hassuja ääniä', 'Soundboard', ul, '../js/projects/niilosound.js')
    new Proj('Calculator', 'Laskin, JavaScript', ul, '../js/projects/calculator.js')

    LINK('../EFTDweb/index.html', 'Escape From The Dark, C#, (ryhmätyö)', ul)
    
    // could make this into link later
    // not as easy you'd think must make new function
    makeIMG('/images/EFTDgameplay2.png', 'Escape From The Dark -gameplay', ul, 'center');

    new Proj('Kello', 'Niilo22 kertoo kellon', ul, '../js/projects/clock.js')

    //LINK('../juomapeli/index.html', 'Simppeli terminal juomapeli, C++', ul)

    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()
    makeTEXT('h1', 'Hei, nimeni on Valtteri', article, 'info1');
    makeTEXT('h3', 'Olen tietotekniikan opiskelija Espoosta', article, 'info2');
    makeTEXT('h3', 'Lempikieliäni ovat C++ ja JavaScript', article, 'info3');
    makeTEXT('h3', 'Löydät minut allaolevista linkeistä', article, 'info4');
    
    makeIMG('//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg', 'Valtteri', article, 'center');
    LINK('mailto:viirretvaltteri@gmail.com', 'viirretvaltteri@gmail.com', article);
    LINK('https://github.com/valtteriviirret', 'github.com/valtteriviirret', article);
    LINK('https://www.instagram.com/valtteriviirret/', 'instagram.com/valtteriviirret', article);

}

listen('nightswitch', darkmode)

listen('frontpage', front)
listen('myworks', myworks)
listen('info', info)


front()
                
  



