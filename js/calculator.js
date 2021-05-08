'use strict';

//luodaan kaikki HTML elementit
//tää on ihan kehitysvammasta settiä mut korjaa myöhemmin
//korjaa joskus koska tää koodi on oikeesti aivan perseestä
//esim `${[i]} avulla pystyy tekee täst paljon hienomman
const baseCalculator = () =>{
    const main = document.getElementById('maincalculator');
    const base = document.createElement('div');
    base.classList.add('base');
    const screen = document.createElement('input');
    screen.type = 'text';
    screen.id = 'screen';
    const firstline = document.createElement('div');
    firstline.id = 'firstline';
    const secondline = document.createElement('div');
    secondline.id = 'secondline';
    const thirdline = document.createElement('div');
    thirdline.id = 'thirdline';
    const fourthline = document.createElement('div');
    fourthline.id = 'fourthline';
    const fifthline = document.createElement('div');
    fifthline.id = 'fifthline';
    const c = document.createElement('button');
    c.innerHTML = 'C';
    c.id = 'c';
    const divide = document.createElement('button');
    divide.innerHTML = '/'
    divide.id = 'divide';
    const seven = document.createElement('button');
    seven.innerHTML = '7';
    const eight = document.createElement('button');
    eight.innerHTML = '8';
    const nine = document.createElement('button');
    nine.innerHTML = '9';
    const multiplier = document.createElement('button');
    multiplier.innerHTML = 'x';
    multiplier.id = 'multiplier';
    const four = document.createElement('button');
    four.innerHTML = '4';
    const five = document.createElement('button');
    five.innerHTML = '5';
    const six = document.createElement('button');
    six.innerHTML = '6';
    const minus = document.createElement('button');
    minus.innerHTML = '-';
    minus.id = 'minus';
    const one = document.createElement('button');
    one.innerHTML = '1';
    const two = document.createElement('button');
    two.innerHTML = '2';
    const three = document.createElement('button');
    three.innerHTML = '3';
    const plus = document.createElement('button');
    plus.innerHTML = '+';
    plus.id = 'plus';
    const zero = document.createElement('button');
    zero.innerHTML = '0';
    const dot = document.createElement('button');
    dot.innerHTML = '.';
    dot.id = 'dot';
    const equals = document.createElement('button');
    equals.innerHTML = '=';
    equals.id = 'equals';

    
    base.appendChild(screen);
    firstline.appendChild(c);
    
    firstline.appendChild(divide);
    secondline.appendChild(seven);
    secondline.appendChild(eight);
    secondline.appendChild(nine);
    secondline.appendChild(multiplier);
    thirdline.appendChild(four);
    thirdline.appendChild(five);
    thirdline.appendChild(six);
    thirdline.appendChild(minus);
    fourthline.appendChild(one);
    fourthline.appendChild(two);
    fourthline.appendChild(three);
    fourthline.appendChild(plus);
    fifthline.appendChild(zero);
    fifthline.appendChild(dot);
    fifthline.appendChild(equals);
    base.appendChild(firstline);
    base.appendChild(secondline);
    base.appendChild(thirdline);
    base.appendChild(fourthline);
    base.appendChild(fifthline);
    main.appendChild(base);
  
}

baseCalculator();
//addding class to all non number elements
//yes this is tiny bit retarded but I'm still going with it

const notNumberClass = () =>{
    const divide = document.getElementById('divide');
    divide.classList.add('calculatorElement');
    const multiplier = document.getElementById('multiplier');
    multiplier.classList.add('calculatorElement');
    const minus = document.getElementById('minus');
    minus.classList.add('calculatorElement');
    const plus = document.getElementById('plus');
    plus.classList.add('calculatorElement')
    const dot = document.getElementById('dot');
    dot.classList.add('calculatorElement');
    const equals = document.getElementById('equals');
    equals.classList.add('calculatorElement')
}

notNumberClass();


//adding class to button swith numbers
const numberClass = () =>{
    const button = document.getElementsByTagName('button');

    for(let i = 0; i < button.length; i++){
        if(button[i].classList.length === 0){
            button[i].classList.add('calculatorNumber');
        }
    }
}

numberClass();

//adding class to div lines
const divClass = () =>{
    const div = document.getElementsByTagName('div');

    for(let i = 0; i < div.length; i++){
        if(div[i].classList.length === 0){
            div[i].classList.add('line');
        }
    }
}

divClass();

//addeventlisteners for buttons
const choosingelements = () =>{
    let input = document.getElementById('screen');
    document.querySelectorAll('.calculatorNumber').forEach(el =>{
        el.addEventListener('click', () =>{
            input.value = input.value !== '0' ? input.value + el.innerText : el.innerHTML;
        })
    })
}

choosingelements();

//making so that dot actually leaves a dot
const dot = () =>{
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
        screen.value = '';
        location.reload();
        
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
const secondnum = (calculation) =>{
    const screen = document.getElementById('screen');
    let num2 = screen.value.substring(screen.value.indexOf(calculation));
    let num2wsign = num2.slice(1);
    let num2num = parseFloat(num2wsign);
    return num2num;
}

//creating addition with using the first number
const addition = () =>{
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
const substraction = () =>{
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
const divide = () =>{
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




