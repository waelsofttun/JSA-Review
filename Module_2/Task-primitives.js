let var1=true ; 
let var2=44;
let var3=14n;
let str="helloworld";
let ud=undefined ;

console.log(`${typeof var1} : ${var1}`);
console.log(`${typeof var2} : ${var2}`);
console.log(`${typeof var3} : ${var3}`);
console.log(`${typeof str} : ${str}`);
console.log(`${typeof ud} : ${ud}`);
console.log(Boolean(BigInt(Number("1234"))));

console.log(var1+false)
console.log(var2+45)
console.log(var3+1n)
console.log(str+"test")
console.log(ud+undefined)
console.log("-------------")
console.log(var2+false)
console.log(var1+45)
//console.log(var2+1n)
console.log(ud+"test")
console.log(42 + Number("1"))
