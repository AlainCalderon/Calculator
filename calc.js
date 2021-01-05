let operatorBtns =  document.querySelectorAll('button.operator');
let numBtns = document.querySelectorAll('button.num');
let screen = document.querySelector('#calc-screen');
let equalOp = document.querySelector('button.calc');
let  clear = document.querySelector('button.clear');
let screenText = '';
let oP = '';
let firstVal,secVal,outputVal=0;

operatorBtns.forEach(btn => {
    btn.addEventListener('click',opClick);
});
numBtns.forEach(btn =>{
    btn.addEventListener('click',numClick);
} );
equalOp.addEventListener('click',operate);
clear.addEventListener('click',clearValues);

function clearValues(){
    firstVal = undefined;
    secVal = 0;
    oP = '';
    screenText='';
    updateScreen(screenText);
}

function numClick(event){
    screenText += event.target.value;
    updateScreen(screenText);
}

// the main function doing the string equation, Function must recognize if firstValue is not defined else run the function that does the equation , then reset the process
function opClick(event){
    switch(true){
        case (firstVal === undefined):
            firstVal = setFirstVal(screenText);
            oP = event.target.value;
            screenText = '';
            break;
        case (oP !== ''):
            secVal = setSecondVal(screenText);
            opChosen(oP,firstVal,secVal);
            oP = event.target.value;
            screenText='';
    }
}
//funcion that does the multiple calculations
function opChosen(theOp,operandUno,operandDos){
   switch(theOp){
       case '+':
           firstVal = getSum(operandUno,operandDos);
            updateScreen(firstVal);
            break;
        case '-':
            firstVal = getDiff(operandUno,operandDos);
            updateScreen(firstVal);
            break;
        case '*':
            firstVal = getProd(operandUno,operandDos);
            updateScreen(firstVal);
            break;
        case '/':
            firstVal = getQuot(operandUno,operandDos);
            updateScreen(firstVal);
            break;
   }
}



function getSum(a,b){
    return Number(a+b);
}
function getDiff(a,b){
    return Number(a-b);
}
function getProd(a,b){
    return Number(a*b);
}
function getQuot(a,b){
    if(b == 0){
        updateScreen('Not Possible')
        clearValues();
        return;}
    else{
    
    return Number(a/b);
    }
}


function setFirstVal(a){return Number(a);}
function setSecondVal(b){return Number(b);}


function updateScreen(string){
    screen.innerText  = string;
}
//Equals operator function
function operate(){
        secVal = setSecondVal(screenText);
        opChosen(oP,firstVal,secVal);
        screenText='';
}

