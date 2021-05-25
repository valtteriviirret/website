// an array of all audiosounds
const audiolist = []

const main = () => {
    const main = document.getElementById('main')
    main.innerHTML = null;
    const article = document.createElement('article')

    for(let i = 0; i < 18; i++) 
    {
        audiolist[i] = new Audio(`..sounds/niilo${i}.mp3`)
    }
    // null check
    for(let i = 0; i < audiolist.length; i++)
    {
        // creating button
        let btn = document.createElement('button')
        btn.style.bottom += "5px"
        btn.innerHTML = `Niilosound ${i}`

        // lets see if this works
        btn.addEventListener('click', audiolist[i].play)

        article.appendChild(btn)
        
    }
    main.appendChild(article)
}


main();

