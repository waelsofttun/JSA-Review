let numbers = [50, 10, 40, 30, 20];


let compareNumbers = (a, b)=> a>b ? 1 : a===b? 0 :-1 
    
console.log(compareNumbers(10,10))

let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
