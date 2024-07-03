let contacts = [{
name: "Maxwell Wright", 
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

let showContact = (list , index ) =>{
    if (list instanceof Array &&  ! Number.isNaN(index))
      for (let key in list[index])
       console.log(`${key} : ${list[index][key]}`) }
       

let showAllContacts = list => {
    if (list instanceof Array ){
        for (let i=0 ; i< list.length ; i++)
            showContact(list ,i) }}
            
            
let addNewContact = (list,data)=>{
    if (data.name &&data.phone && data.email)
    list.push(data)}
    
    
  
  addNewContact(contacts,{name:"NewName",phone:"Newphone",email:"newemail"})
  
      showAllContacts(contacts)
    
            
        
    

       
