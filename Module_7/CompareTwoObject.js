let deepComp = function(obj1 , obj2){
    let i = 0 
    let obj1_keys = Object.keys(obj1)
    let obj2_keys = Object.keys(obj2)
    let desicion = obj1_keys.length === obj2_keys.length
    while(desicion && i<obj1_keys.length){
        if (typeof obj1[obj1_keys[i]] !== 'object' && obj1[obj1_keys[i]] !== obj2[obj2_keys[i]] ){
            desicion = false}
         else if ( typeof obj1[obj1_keys[i]] === 'object' && obj1[obj1_keys[i]] instanceof Array ){
                desicion = obj1[obj1_keys[i]].toString()===obj2[obj2_keys[i]].toString()}
         else if(typeof obj1[obj1_keys[i]] === 'object')  {
             desicion = deepComp(obj1[obj1_keys[i]],obj2[obj2_keys[i]]) }
            
            
        i++ }
        
    return    desicion  ;     }  
    
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false    
             
