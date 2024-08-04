// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let users: string[] = ["Ali", "Saad", "Zain", "Bisma"];
    //for (let user of users1) {
    if(users.length === 0) {
    console.log("We need to find some users!")
    }
       else { 
        users=[];
        console.log("All users have been removed  " + users.length) 
        }

// 32.	Checking Usernames: 
let current_users: string[] = ["AUN Ali", "Ahmed Ali", "Qasim Zia", "Zain Ahmed", "Saad Ullah"];

let new_users: string[] = ["Aun Ali", "Ahmed Kami", "Qasim Murad", "Zia Ahmed", "Saad Ullah"];
new_users.forEach((new_users) => {
 if(current_users.some((currentusers) => currentusers===new_users)) {console.log(`${new_users}, you will need to enter a new username.`);
 } else {console.log(`${new_users}, you are available`);
 }
 });
 
// 33.	 Ordinal Numbers: 
let numbersIn : number[] = [1,2,3,4,5,6,7,8,9];
for (let numberth of numbersIn) {
 if (numberth == 1) {
  console.log(`${numberth}st`)  }
 else if (numberth == 2)  {
  console.log(`${numberth}nd`)   }
 else if (numberth == 3) { console.log(`${numberth}rd`)  }
 else { console.log(`${numberth}th`) 

 } 
} 

// 34. Pizzas: Think of at least three kinds of your favorite pizza. 
let favtpizza : string [] = ["Chicken Tikka", "Fatija", "MalaiBoti"];
for (let pizza of favtpizza) { 
 console.log(`${pizza}`) }
// • Modify your for loop to print a sentence using the name of the pizza instead of //printing just the name of the pizza. For each pizza you should have one line of output //containing a simple statement like I like pepperoni pizza.
let favpizza2 : string [] = ["Chicken Tikka", "Fatija", "MalaiBoti"];
for (let pizza1 of favpizza2) { 
 console.log(`I like ${pizza1} pizza`) }
// Add a line at the end of your program, outside the for loop, that states how much you //like pizza. The output should consist of three or more lines about the kinds of pizza //you like and then an additional sentence, such as I really love pizza!
let favpizza : string [] = ["Chk Tikka", "Fatija", "MalaiBoti"];
for (let pizza of favpizza) { 
 console.log(`I like ${pizza} pizza`) }
console.log("\n")
for (let pizza of favpizza) { 
 console.log(`I really like ${pizza} pizza!`) }
 console.log("\n" + "I really love pizza")

// 35.	Animals: 
let animals: string[] = ["Dog", "Cat", "Parrot"];
for(let i=0; i<animals.length; i++) {console.log(animals[i]); 
}  
for(let i=0; i<animals.length; i++) {console.log(`${animals[i]} would make a great Pet.`); 
}  
console.log("Any of these animals would make a great pet!");

// 36.	T-Shirt: Write a function called make_shirt() 
function make_shirt() {
    let simplefunction = "mediumshirt";
    console.log(`${simplefunction} I love typescript.`);
    return simplefunction;
    }
    make_shirt();
// 37. Large Shirts: Modify the make_shirt() function 
let size:string[]= ["medium", "large"];
let defaultMessage= "I love typescript";
let mediumshirt = (`Size of shirt is ${size[0]}, ${defaultMessage}`);
let largeshirt = (`Size of shirt is ${size[1]}, ${defaultMessage}`);
let smallshirt = (`Size of shirt is: small and i love party`);
let xlargeshirt = (`Size of shirt is: xlarge and i love party`);
function make_shirt2() {
    let simplefunction = (mediumshirt)
    return simplefunction;
    }
    let response = make_shirt2();
    console.log(response);

// 38.	Cities: Write a function called describe_city() that accepts the name of a city 
let Karachi = "Karachi is in Pakistan";
let Paris = "Paris is in France";
let London = "London is in England";
function describe_city(city: string) {
  console.log(city);
}
console.log(Karachi);
// 39. City Names: Write a function called city_country() 
let Lahore = "Lahore, Pakistan";
let Manchester = "Manchester, England";
let Dehli = "Dehli, India";
function city_country(city1: string) {
  console.log(city1);
}
console.log(Lahore);
console.log(London);
console.log(Dehli);
// 40.	Album: 
function make_album(artistName: string, albumtitle: string)
{    return {artistName, albumtitle};

}
let album1 = make_album("Ali Zafar", "ps1 song")
let album2 = make_album("Atif Aslam", "ps2 song")
let album3 = make_album("Anjum Azhar", "ps3 song")
 console.log(album1);
 console.log(album2);
 console.log(album3);
 
 function make_album1(artistName: string, albumtitle: string, numberoftrack?: number)
{    return {artistName, albumtitle, numberoftrack};

}
let album4 = make_album1("Ali Zafar", "ps1 song", 5)
let album5 = make_album1("Atif Aslam", "ps2 song", 6)
let album6 = make_album1("Anjum Azhar", "ps3 song")
 console.log(album4);
 console.log(album5);
 console.log(album6);
