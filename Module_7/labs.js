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



    //constructor
let Image = function(title,artist,date){
    this.title = title
    this.artist = artist
    this.date =date }
    
let images = {    
    list : [],
    contains(title){
        return this.list.some(el=>el.title === title)},
    add(title,artist,date){
        if(!this.contains(title))
        this.list.push( new Image(title,artist,date))},
    show (){
       
        for(let x of this.list){
         console.log("------")
           for (let key in x)
           console.log(`${key} : ${x[key]}`)}},
    clear(){
        this.list=[]
        
    }
}   

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
    
