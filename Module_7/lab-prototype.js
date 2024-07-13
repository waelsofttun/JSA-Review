
    //constructor
let Image = function(title,artist,date){
    this.title = title
    this.artist = artist
    this.date =date 
    }
    Image.prototype={show(){console.log(`${this.title} - ${this.artist} -${this.date}` )}}
    
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
         x.show()}},
    clear(){
        this.list=[]
        
    },
    edit(title,artist,date){
        
            let found = this.list.find(el=>el.title===title)
            if(found){
            found.artist = artist
            found.date = date}
        },
    delete(title){
        let found_index = this.list.findIndex(el=>el.title===title)
        this.list.splice(found_index,1)
        
    
}   }

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
    
