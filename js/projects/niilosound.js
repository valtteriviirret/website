console.log("niilosoundbar created")


const main = () => {
    const main = document.getElementById('main')
    main.innerHTML = null;
    const article = document.createElement('article')


    const testbutton = document.createElement('button')
    testbutton.value = "Click me!"

    testbutton.addEventListener('click', player)
    article.appendChild(testbutton)

    main.appendChild(article)

}

const player = () => {
    const audio = new Audio('../sounds/niilo0.mp3')
    audio.play()
}

main();

