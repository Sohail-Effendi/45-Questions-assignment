// 16. More Guests: 
let guestList16:String[] = ["Ali", "Saad", "Zain", "Bisma"];
let not_present:string ="Saad";
let new_guest:string = "Umer";
guestList16[1]=new_guest;
for(let i=0; i<guestList16.length; i++) {
    console.log(`Respected Sir/Madam + guestList16[i] + ,\n We invited you on dinner tomorrow. \n Thank you \n`);
    
    }
    guestList16.unshift("Maaz","Atif","Rana");
for(let i=0; i<guestList16.length; i++) {
    console.log("Respected Sir/Madam " + guestList16[i] + ',\n We invited you on dinner tomorrow. \n Thank you \n')
}
console.log("We would like to inform that we found a bigger table for guest."); 

// 17. Shrinking Guest List: 
let guestList17: string[] = ["Ali", "Saad", "Zain", "Bisma"];
    console.log(`Respected Sir/Madam,\n We can invite only two people for dinner. \n Thank you. \n`);
while(guestList17.length>2){
let remove_guest = guestList17.pop();
 console.log(`Sorry Sir/Madam, ${remove_guest} you are not invited for dinner.`);
 }
for(let i=0; i<guestList17.length; i++) {
  console.log(`Respeted Sir/Madam ${guestList17[i]},\n Yes you are still invited on tomorrow dinner \n Thank you. \n`);
 }
 guestList17.splice(0,2,);
 console.log(guestList17);
// 18.  Seeing the World: 
let places : string [] = ['Karachi', 'Delhi', 'London', 'New York']
 console.log('original : ' + places);
 console.log('copy : ' + [...places].sort());
 console.log('original : ' + places);
 console.log('copy : ' + [...places].sort().reverse());
 console.log('original : ' + places.sort());
console.log('original : ' + places.sort().reverse());

// 19. Dinner Guests: 

import {guestList} from "./Q11to15"
console.log(` \n print number of guest list invited`); 
console.log(`we had invited ${guestList.length}`);

// 20. Think of something you could store in a array. 

const places2: string[] = ["K-2","Indusriver","Pakistan","Karachi","Urdu","Rupees"]; 
for(const place of places2 ) {
 console.log(place);
}
