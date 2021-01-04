let operatorBtns =  document.querySelectorAll('button.operator');
let numBtns = document.querySelectorAll('button.num');
let screen = document.querySelector('#calc-screen');
let equalOp = document.querySelector('button.calc');
let  clear = document.querySelector('button.clear');
let screenText = '';
let oP = '';
let firstVal,secVal = 0;

operatorBtns.forEach(btn => {
    btn.addEventListener('click',opClick);
});
numBtns.forEach(btn =>{
    btn.addEventListener('click',numClick);
} );
equalOp.addEventListener('click',operate);
clear.addEventListener('click',clearValues);

function clearValues(){
    firstVal= 0;
    secVal = 0;
    oP = '';
    screenText=''
    updateScreen(screenText);
}

function numClick(event){
    screenText += event.target.value;
    updateScreen(screenText);
}

// the main function doing the string equation, Function must recognize if firstValue is not defined else run the function that does the equation , then reset the process
function opClick(event){
	switch(true){

    case (oP === '' && firstVal === undefined):
    firstVal = parseInt(screenText);
    oP = event.target.value;
    screenText = '';
    updateScreen(screenText);
    break;
    
    case(oP !== '' && secVal === 0):
    secVal  = parseInt(screenText);
    screenText = '';
    opChosen(oP,firstVal,secVal);
    break;
    
    case (oP === '' && firstVal !== undefined):
    secVal=parseInt(screenText);    
    oP = event.target.value;
    screenText='';
    opChosen(oP,firstVal,secVal);
    break;
    
    default:
    alert('shit is fucked');
    }

}
//funcion that does the multiple calculations
function opChosen(theOp,operandUno,operandDos){
    let uno = parseInt(operandUno);
    let dos = parseInt(operandDos);
    switch(theOp){
        case '+':
            uno += dos;
            firstVal = uno;
            screenText = firstVal;
            updateScreen(screenText);
            screenText='';
            theOp = '';
            oP = theOp;
            break;
        case '-':
            uno -= dos;
            firstVal = uno;
            screenText = firstVal;
            updateScreen(screenText);
            screenText='';
            theOp = '';
            oP = theOp;
            break;
        case '*':
            uno *= dos;
            firstVal = uno;
            screenText = firstVal;
            updateScreen(screenText);
            screenText='';
            theOp = '';
            oP = theOp;
            break;
        case '/':
            uno /= dos;
            firstVal = uno;
            screenText = firstVal;
            updateScreen(screenText);
            screenText='';
            theOp = '';
            oP = theOp;
            break;
        default:
            alert('que?')
            break;
    }
}

function updateScreen(string){
    screen.innerText  = string;
}
//Equals operator function
function operate(){


    
}

