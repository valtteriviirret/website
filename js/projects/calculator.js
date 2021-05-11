'use strict';


// creating button
const mB = (text, id, line) => {
    const elem = document.createElement('button');
    elem.innerHTML = text;
    elem.id = id;
    line.appendChild(elem);
    return elem;
}

// creating form
const createLine = (id, base) => {
    const elem = document.createElement('div');
    elem.id = id;
    base.appendChild(elem);
    return elem;
}


const baseCalculator = () => {
    const main = document.getElementById('main');
    const base = document.createElement('div');
    base.classList.add('base');
    const screen = document.createElement('input');
    screen.type = 'text';
    screen.id = 'screen';
    
    const firstline = createLine('firstline', base);
    const secondline = createLine('secondline', base);
    const thirdline = createLine('thirdline', base);
    const fourthline = createLine('fourthline', base);
    const fifthline = createLine('fifthline', base);
    
    mB('C', 'c', firstline);
    mB('/', 'divide', firstline);
    mB('x', 'multiplier', secondline);
    mB('-', 'minus', thirdline);
    mB('+', 'plus', fourthline);
    mB('.', 'dot', fifthline);
    mB('=', 'equals',fifthline);
    mB('0', 'empty', fifthline);

    base.appendChild(screen);

    for(let i = 7; i < 10; i++) {
        mB([i].toString(), 'empty', secondline);
    }

    for(let i = 4; i < 7; i++) {
        mB([i].toString(), 'empty', thirdline);
    }

    for(let i = 1; i < 4; i++) {
        mB([i].toString(), 'empty', fourthline);
    }

    main.appendChild(base);
}

baseCalculator();


const notNumberClass = () => {
    document.getElementById('divide').classList.add('calculatorElement');
    document.getElementById('multiplier').classList.add('calculatorElement');
    document.getElementById('minus').classList.add('calculatorElement');
    document.getElementById('plus').classList.add('calculatorElement')
    document.getElementById('dot').classList.add('calculatorElement');
    document.getElementById('equals').classList.add('calculatorElement');
}

notNumberClass();


//adding class to button swith numbers
const numberClass = () => {
    const button = document.getElementsByTagName('button');

    for(let i = 0; i < button.length; i++){
        if(button[i].classList.length === 0){
            button[i].classList.add('calculatorNumber');
        }
    }
}

numberClass();

//adding class to div lines
const divClass = () => {
    const div = document.getElementsByTagName('div');

    for(let i = 0; i < div.length; i++){
        if(div[i].classList.length === 0){
            div[i].classList.add('line');
        }
    }
}

divClass();

//addeventlisteners for buttons
const choosingelements = () => {
    let input = document.getElementById('screen');
    document.querySelectorAll('.calculatorNumber').forEach(el =>{
        el.addEventListener('click', () =>{
            input.value = input.value !== '0' ? input.value + el.innerText : el.innerHTML;
        })
    })
}

choosingelements();

//making so that dot actually leaves a dot
const dot = () => {
    const dot = document.getElementById('dot');
    const screen = document.getElementById('screen');
    dot.addEventListener('click', () =>{
        let screenstring = screen.value.toString();
        screen.value = screenstring + '.';
    })
}

dot();

//clearing all the numbers by pressing the clear button
const clear = () => {
    const clearbutton = document.getElementById('c');
    const screen = document.getElementById('screen');
    clearbutton.addEventListener('click', () =>{
        screen.value = 0;
        //location.reload();
        
    })
}

clear();


//returning the first number of the operation for the rest of the calculations
const listenerforoperators = () => {   
       
    const operator = document.getElementsByClassName('calculatorElement');
    for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', firstnum); 
        
    }
}

//getting the numbers before operator
const firstnum = () => {
    const screen = document.getElementById('screen');
    let string1 = screen.value;
    let firstnumber = parseFloat(string1);
    return firstnumber;
}

listenerforoperators();


//function for generating the second number
const secondnum = (calculation) => {
    const screen = document.getElementById('screen');
    let num2 = screen.value.substring(screen.value.indexOf(calculation));
    let num2wsign = num2.slice(1);
    let num2num = parseFloat(num2wsign);
    return num2num;
}

//creating addition with using the first number
const addition = () => {
    const addition = document.getElementById('plus');
    addition.addEventListener('click', () =>{
        const screen = document.getElementById('screen');
        let screenstring = screen.value.toString();
        screen.value = screenstring + '+';
        const equals = document.getElementById('equals');
        equals.addEventListener('click', () =>{
            let num = firstnum();
            let num2 = secondnum('+');
            let sum = num + num2;
            screen.value = sum;
        })
        
    })
}

addition();

//function for substraction
const substraction = () => {
    const minus = document.getElementById('minus');
    minus.addEventListener('click', () =>{
        const screen = document.getElementById('screen');
        let screenstring = screen.value.toString();
        screen.value = screenstring + '-';
        const equals = document.getElementById('equals');
        equals.addEventListener('click', () =>{
            let num = firstnum();
            let num2 = secondnum('-')
            let sum = num - num2;
            screen.value = sum;
        })
    })

}

substraction();

//function for divide
const divide = () => {
    const dividebutton = document.getElementById('divide');
    dividebutton.addEventListener('click', () =>{
        const screen = document.getElementById('screen');
        let screenstring = screen.value.toString();
        screen.value = screenstring + '/';
        const equals = document.getElementById('equals');
        equals.addEventListener('click', () =>{
            let num = firstnum();
            let num2 = secondnum('/')
            let sum = num / num2;
            screen.value = sum;
        })
    })
}

divide();

//function for multiply
const multiply = () =>{
    const multiplybutton = document.getElementById('multiplier');
    multiplybutton.addEventListener('click', () =>{
        const screen = document.getElementById('screen');
        let screenstring = screen.value.toString();
        screen.value = screenstring + 'x';
        const equals = document.getElementById('equals');
        equals.addEventListener('click', () =>{
            let num = firstnum();
            let num2 = secondnum('x')
            let sum = num * num2;
            screen.value = sum;
        })
    })
}

multiply();




