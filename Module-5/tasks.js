let numbers = [50, 10, 40, 30, 20];

//arrowfunction
let compareNumbers = (a, b)=> a>b ? 1 : a===b? 0 :-1 
    
console.log(compareNumbers(10,10))

let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]


// use of Number.isInteger(x)

let add = (a,b)=>(Number.isInteger(a)&&Number.isInteger(b))? a+b : NaN ; 
let mult = (a,b)=>(Number.isInteger(a)&&Number.isInteger(b))? a*b : NaN ; 

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN

let action = (callback,a,b)=>callback(a,b)

console.log(action(add, 12, 10)); // -> 22
console.log(action(mult, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

let fibbRec = a => a>1 ? fibbRec(a-1)+fibbRec(a-2) : a==1 ? 1 : 0


console.log(fibbRec(4)); // -> 3


console.log(fibbRec(7)); // -> 13
