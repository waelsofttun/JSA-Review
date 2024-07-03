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
let showContact = function (contacts, i) {
if (contacts instanceof Array && contacts[i]) {
    console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
}
}

let showAllContacts = function (contacts) {
if (contacts instanceof Array) {
    for (contact of contacts) {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
}
}

let addNewContact = function (contacts, name, phone, email) {
if (contacts instanceof Array && name && phone && email) {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
}
}

showAllContacts(contacts)

let comparer =function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
};

let choice = prompt(" Do you want to sort the list By name , phone or email")


switch (choice){
    
 case "name":contacts.sort((a,b)=>comparer(a.name,b.name));
     break ; 
 case "phone":contacts.sort((a,b)=>comparer(a.phone,b.phone));
     break ;      
 case "email":contacts.sort((a,b)=>comparer(a.email,b.email));
     break ;         
 default : console.log("choix invalide")
}
     
showAllContacts(contacts)
