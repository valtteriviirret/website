'use strict';


export default class Htmltemplate { 
    constructor(title, scriptpath) {
        this.title = title;
        this.scriptpath = scriptpath;
        this.create()
    }

    // creating html
    create = () => {

    const w = window.open("")
    w.document.writeln
    (`
    <!DOCTYPE html> 
    <html lang="en">
    <meta charset="UTF-8">
    <title>${this.title}</title>
    <link rel='stylesheet' type='text/css' href="/style/style.css">
    <link rel="stylesheet preload" href="/style/wide.css" as="style" media="(min-width: 1000px)">
    <link rel="stylesheet preload" href="/style/mid.css" as="style" media="(max-width: 1000px)">
    <link rel="stylesheet preload" href="/style/small.css" as="style" media="(max-width: 550px)">
    </head>
    <body>
    <main id='main'>
    <h1>TESTI</h1>
    </main>
    <script src=${this.scriptpath}></script>
    </body>
    </html>
    `)
    
    }
}