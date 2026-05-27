const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const allClear = document.querySelector('#on');
const clear = document.querySelector('#clear');
const plusMinus = document.querySelector('#plus-minus');
const decimal = document.querySelector('#decimal');

const display = document.querySelector('#display');

let num1 = 0;
let num2 = 0;
let result = 0;
let oper = '';


numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.innerHTML += number.innerHTML; 
  });
});

operator.forEach((item) =>{
    item.addEventListener('click', () =>{
        num1 = Number(display.innerHTML);
        console.log('num1 =' + ' ' + num1);

        oper = item.innerHTML;
        console.log(oper);

        display.innerHTML = '';
    })
})

equals.addEventListener('click', () => {
    num2 = Number(display.innerHTML);

    if(oper === '+'){
        result = num1 + num2;
        display.innerHTML = result;
    }else if(oper === '-'){
        result = num1 - num2;
        display.innerHTML = result;
    }else if(oper === 'x'){
        result = num1 * num2;
        display.innerHTML = result;
    }else if(oper === '/'){
        result = num1 / num2;
        display.innerHTML = result;
    }

    console.log('num1 =' + ' ' + num1);
    console.log('num2 =' + ' ' + num2);
    console.log('result =' + ' ' + result);

    num2 = 0;

})

allClear.addEventListener('click', () => {
    display.innerHTML = '';
    num1 = 0;
    num2 = 0;
})

clear.addEventListener('click', () =>{
    display.innerHTML = display.innerHTML.slice(0, -1);
    console.log('num1 =' + ' ' + num1);
    console.log('num2 =' + ' ' + num2);
    console.log('result =' + ' ' + result);
})

plusMinus.addEventListener('click', () =>{
    display.innerHTML *= -1; 
})

decimal.addEventListener('click', () => {
    if(!display.innerHTML.includes('.')){
        display.innerHTML += decimal.innerHTML;
    }
})

