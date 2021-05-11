'use strict';

import Htmltemplate from "./htmltemplate.js";

// this class creates a link for a new project in main
// pressing the link will open the script with HTML template

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

        // opens up file
        link.addEventListener('click', this.makeHtml)
        
        link.innerHTML = this.description
        li.appendChild(link)
        this.ul.appendChild(li)
    }

    // make the html template to script
    makeHtml = () => new Htmltemplate(this.title, this.scriptpath)
    
}


