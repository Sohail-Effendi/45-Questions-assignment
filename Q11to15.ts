//Q11- Names: Store the names of a few of your friends in a array called names. Print each person’s       // name by accessing each element in the list, one at a time.

let friendName : string[] = ["Ali","Saad","Zain"];
for(let i=0; i<friendName.length; i++) {
console.log(friendName[i]);
}

//Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s //name, print a message to them. The text of each message should be the same, but each message //should be personalized with the person’s name.

let friendNames : string[] = ["Ali","Saad","Zain"];
	for (let i=0; i<friendNames.length; i++) {
 	 console.log (friendNames [i] + ', Wish you best luck');
}
 
//Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, //and make a list that stores several examples. Use your list to print a series of statements about these //items, such as “I would like to own a Honda motorcycle.”

let transport:string[] = ["Honda motorcycle", "Suzuki Car", "Toyota Jeep"];
for(let i=0; i<transport.length; i++) {
console.log("I would like to own a" + transport[i]);

}

//Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make //a list that includes at least three people you’d like to invite to dinner. Then use your list to print a //message to each person, inviting them to dinner.

export let guestList:String[] = ["Ali", "Saad", "Zain", "Bisma"];
for(let i=0; i<guestList.length; i++) {
    console.log("Respected Sir/Madam " + guestList[i] + ',\n You are invited on dinner tomorrow. \n Thank you \n')

}        

//Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need //to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating //the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new //person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestList2:string[] = ["Ali", "Saad", "Zain", "Bisma"];
let not_present: string ="Saad";
let new_guest: string = "Umer";
guestList2[1]=new_guest;
for(let i=0; i<guestList2.length; i++) {
    console.log("Respected Sir/Madam " + guestList2[i] + '\n We invite you on dinner tomorrow.\n Thank you')

}
