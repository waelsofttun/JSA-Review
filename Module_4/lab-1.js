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

let choice = prompt(" what's you choice first ,last , new ");
let last = contacts.length -1
switch(choice){
    
    
    case "first" : 
        alert(`${contacts[0].name} /${contacts[0].phone} / ${contacts[0].email}`);
        break ; 
    case "last" :    
        alert(`${contacts[last].name} /${contacts[last].phone} / ${contacts[last].email}`);
        break ;
    case "new"  :
        let name = prompt("give me the name plz");
        let phone = prompt("give me the phone plz ");
        let email= prompt("give me the email plz");
        
        if (name&&phone&&email){
            contacts.push({name : name,
                           phone : phone,
                           email:email})
                       
        }else 
             {alert( "details invalide")}
        break ;     
    default : 
        alert("choix invalide"); }

