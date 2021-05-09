'use strict';

class Proj {

    // joo huomenna ala kattomaan tätä viel tarkemmin
    // varmaan ihan pitäis tota javascriptin syntaxia opetella
    projectList = []

    constructor(filename, description) {
        this.filename = filename
        this.description = description
    }

    init = () => {
        this.projectList.push(this)
    }
}
console.log("just a test")

