/** Creating some variables and adding them together
let first = 5;
let second = 10; 
let result = first + second; 

console.log(result);
*/

/** Eval (can be naughty) is not best practise  
let first = 5;
let second = 10;

console.log(eval(first + second));
*/

/** Basic calculator with eval 
let calculation = '5 * 5';
console.log(eval(calculation));
*/

//Basic Calculator without Eval
let calculation = '5 * 5';
let parts = calculation.split(' ');
let first = parts[0];
let operator = parts[1];
let second = parts[2];

if(operator === '*') {
    console.log(first * second);
} else if (operator === '/') {
    console.log(first / second); 
} else if (operator === '+') {
    console.log(first + second);
} else if (operator === '-') {
    console.log(first - second);
}
