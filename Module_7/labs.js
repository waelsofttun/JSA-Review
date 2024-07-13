let choice ="" ;
let paints=[] ;

while(choice!="stop"){
    
    paints.push({title : prompt("title ; ") , artist : prompt("artist : "),date : prompt("date : ")})
    choice = prompt("Add new paint","yes");
}

for(let x of paints){
    console.log("------")
 for (let key in x)
    console.log(`${key} : ${x[key]}`)}


//constructor
let Image = function(title,artist,date){
    this.title = title
    this.artist = artist
    this.date =date }
    

//factory
let getImage = (title,artist,date)=>new Image(title,artist,date)

let choice ="" ;
let paints=[] ;

while(choice!="stop"){
    
    paints.push(new Image(prompt("title ; ") ,prompt("artist : "),prompt("date : ")))
    choice = prompt("Add new paint","yes");
}

for(let x of paints){
    console.log("------")
 for (let key in x)
    console.log(`${key} : ${x[key]}`)}



