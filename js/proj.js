'use strict';

import Htmltemplate from "./htmltemplate.js";



// easy way to start new project
export default class Proj{

    constructor(title, description, ul, scriptpath) {
        this.title = title
        this.description = description
        this.ul = ul
        this.scriptpath = scriptpath
        this.create()
    }

    // make the link
    create = () => {
        const li = document.createElement('li')
        const link = document.createElement('a')
        
        link.href = "about:blank"
        link.target = "_blank"

        link.addEventListener('click', this.makeHtml)
        
        link.innerHTML = this.description
        li.appendChild(link)
        this.ul.appendChild(li)
    }

    // make the html template
    makeHtml = () => {
        new Htmltemplate(this.title, this.scriptpath)
    }
}


