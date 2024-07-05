let div = (a,b)=>{
    
    
    if (b===0){
        throw new RangeError(" division by zero ")}
    return a/b ; }
    
    
   console.log( div(1,2))
   console.log( div(5,0))



let div = (a,b)=>{
    
    
    if (b===0){
        throw new RangeError(" division by zero ")}
    return a/b ; }
    
let numbers = [10, 40, 0, 20, 50];


for ( let x of numbers){
    
    try{
        console.log(div(1000,x))}
    catch  (e) {
        console.log(e);
         } }
        

