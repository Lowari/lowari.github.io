const allButton = document.querySelectorAll('button');
let allButtonArray = [...allButton];

allButtonArray.forEach(element => {
    element.classList.add('buttonHeight', 'fontSize', 'm-1');
});

const numerique = document.querySelectorAll('.numerique');
let numeriqueArray = [...numerique];

let flag = false;
const spanResult = document.getElementById('spanResult');
const plus = document.getElementById('plus');
const fois = document.getElementById('fois');
const moins = document.getElementById('moins');
const diviser = document.getElementById('diviser');
const egal = document.getElementById('egal');
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');
const pDelete = document.getElementById('delete');
const span = document.querySelectorAll('span');
const calcul = document.getElementById('calcul');


span.forEach(element => {
    element.classList.add('fontSizes');
});

numeriqueArray.forEach(element => {
    element.addEventListener('click', () => {
        if (flag == false) {
            firstNumber.textContent += element.textContent;
        } else {
            secondNumber.textContent += element.textContent;
        }
    })
});

pDelete.addEventListener('click', () => {
    firstNumber.textContent = "";
    secondNumber.textContent = "";
    calcul.textContent = "";
    result.textContent = "";
    spanResult.textContent = "";
    flag = false;
});

const calculator = document.querySelectorAll('.calculator');
let calculatorArray = [...calculator];

calculatorArray.forEach(element => {
    element.addEventListener('click', () => {
        flag = true;
        calcul.textContent = element.textContent;
    })
});

egal.addEventListener('click', () => {
    if (calcul.textContent == "+") {
     spanResult.textContent = parseFloat(firstNumber.textContent) + parseFloat(secondNumber.textContent);
    }
    if (calcul.textContent == "-") {
        spanResult.textContent = parseFloat(firstNumber.textContent) - parseFloat(secondNumber.textContent);
    }
    if (calcul.textContent == "/") {
        spanResult.textContent = parseFloat(firstNumber.textContent) / parseFloat(secondNumber.textContent);
    }
    if (calcul.textContent == "*") {
        spanResult.textContent = parseFloat(firstNumber.textContent) * parseFloat(secondNumber.textContent);
    }
    firstNumber.textContent = "";
    secondNumber.textContent = "";
    calcul.textContent = "";
    result.textContent = "";
    flag = false;
});