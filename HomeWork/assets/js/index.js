//const number = 100;
//const str = "hello world";
//const und = undefined;
//console.log(number || 5);
//console.log(100 > 50 && und);
//console.log(und || str);
//console.log(str && number);
//console.log(number < 200 && number < 50 && true);
//
//console.log("" + 1 + 0);
//console.log(" \t \n" - 2);
//let a = 0;
//let b = "0";
//console.log(undefined >= 0);

let name = prompt('What is your name?', '')
let surname = prompt('what is your surname', '')
let age = prompt('How old are you?', '');

if (age >= 18) {
    alert('you can access the page');
} else {
    alert('You cannot access the page because you are under 18 years old');
}