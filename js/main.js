'use strict';


//poistetaan mobiiliversiota varten tehtyjä HTML elementtejä, jos selain ei ole mobiili
const mobileCheck = () => {
    let mobile = false;
    if ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) ){
        mobile = true;
    }
    if (mobile){
        document.getElementsByClassName('mobile-only').classList.remove('hidden');
    }
  }

//eventti darkmodea varten
const switchchange = () => {
    const button = document.getElementById('nightswitch');
    button.addEventListener('click', darkmode);   
}


//itse darkmoden muutokset
const darkmode = () => {
    const main = document.getElementById('main');
    main.classList.toggle('grey');
    const container = document.getElementById('container');
    container.classList.toggle('black'); 
}
switchchange();

//luodaan eventlistener headerin linkille
const myworkslink = () => {
    const link = document.getElementById('myworks');
    link.addEventListener('click', myworks);
}

//töiden linkkejen dom, uusien töiden linkit tähän!
const myworks = () => {
    const main = document.getElementById('main');
    main.innerHTML = null;
    const article = document.createElement('article');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');

   
    const a2 = document.createElement('a');
    a2.href = 'clock.html';
    a2.innerHTML = "Niilo22 kertoo kellon";
    const a3 = document.createElement('a');
    a3.href = 'calculator.html';
    a3.innerHTML = 'Laskin';
    const a4 = document.createElement('a');
    a4.href = 'whack-a-mole.html';
    a4.innerHTML = 'Osu Niiloon peli';

    
    
    li.appendChild(a2);
    li1.appendChild(a3)
    li2.appendChild(a4);
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    article.appendChild(ul);
    main.appendChild(article);
}

myworkslink();

//info addeventlistener
const infolink = () => {
    const link = document.getElementById('info');
    link.addEventListener('click', info);
}
//info sivun html
const info = () => {
    const main = document.getElementById('main');
    main.innerHTML = null;
    const article = document.createElement('article');
    article.id = 'infoarticle';
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

infolink();

//etusivu sanan addeventlistener
const frontpagelink = () => {
    const link = document.getElementById('frontpage');
    link.addEventListener('click', frontpage);
}

//tyhjennetään sivusto jos etusivu sanaa klikataan
const frontpage = () => {
    const main = document.getElementById('main');
    main.innerHTML = null;
}

frontpagelink();