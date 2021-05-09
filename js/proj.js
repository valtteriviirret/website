'use strict';

export default class Proj {

    projectList = []

    constructor(filename, description, ul) {
        this.filename = filename
        this.description = description
        this.ul = ul
        this.create()
    }

    create = () => {
        const li = document.createElement('li')
        const link = document.createElement('a')
        link.href = this.filename
        link.innerHTML = this.description
        li.appendChild(link)
        this.ul.appendChild(li)
        this.projectList.push(this)
        console.log(this.projectList.length)
    }
}


