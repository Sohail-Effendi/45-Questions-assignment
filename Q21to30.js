"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 21. They think of something you could store in a TypeScript Object. 
const things = {
    type: "Honda",
    model: "Honda City",
    year: 2006
};
console.log(things);
// 22. Intentional Error: 
const names = ["Ali", "Saad", "Zain", 1, 2, 5];
console.log(names[6]);
//An error occur that these is no element at index 6.
console.log(names[3]);
// 23. 	Conditional Tests: 
let car1 = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car1 == "subaru");
let car2 = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car2 == 'subaru');
console.log("Is car == 'honda'? I predict False.");
console.log(car2 == 'honda');
console.log("Is car != 'ford'? I predict True.");
console.log(car2 != 'ford');
console.log("Is car != 'subaru'? I predict False.");
console.log(car2 != 'subaru');
console.log("Is car === 'subaru'? I predict True.");
console.log(car2 === 'subaru');
console.log("Is car === 'honda'? I predict False.");
console.log(car2 === 'honda');
console.log("Is car !== 'ford'? I predict True.");
console.log(car2 !== 'ford');
console.log("Is car !== 'subaru'? I predict False.");
console.log(car2 !== 'subaru');
console.log("Is car.length > 5? I predict False.");
console.log(car2.length > 5);
console.log("Is car.length <= 10? I predict True.");
console.log(car2.length <= 10);
// 24. More Conditional Tests: 
//• Tests for equality and inequality with strings
let car = 'Corolla';
let age = 20;
let numbers = [3, 6, 9, 12, 15];
console.log("is car=='Corolla'? predict true");
console.log(car == "Corolla");
console.log(car != "Corolla");
//Tests using the lower case function
console.log("Check lower case");
console.log(car.toLowerCase() == 'corolla');
console.log(car.toLowerCase() == 'toyota');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("is age>18: I predict true");
console.log(age > 18);
console.log(age < 18);
console.log(age >= 20);
console.log(age <= 18);
//• Tests using "and" and "or" operators
console.log("is age<25 && age>18: I predict true");
console.log(age < 25 && age < 20);
console.log(age < 25 || age < 18);
// Test whether an item is in a array
//• Test whether an item is not in a array
console.log("is 3 # in array, I predict true");
console.log(3 in numbers);
console.log(7 in numbers);
// 25. Alien Colors #1: 
const aliencolor = "green";
if (aliencolor === 'green') {
    console.log("Well done ! You just earned 5 points.");
}
//• Write one version of this program that passes the if test and another that fails. 
const alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log();
}
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
const alienColor2 = 'yellow';
if (alienColor2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// if condition is matched with the given value then code run “Cong.. ! you just earned 5 //points otherwise run you earned 10 points.
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
const alienColor3 = 'green';
let aliencolor3 = "yellow";
if (aliencolor3 == "green") {
    console.log("You earned 5 points.");
}
else if (aliencolor3 == "yellow") {
    console.log("You earned 10 points.");
}
else if (aliencolor3 == "red") {
    console.log("You earned 15 points.");
}
else {
    console.log("Please choose appropriate color");
}
//• If the alien is yellow, print a message that the player earned 10 points.
const alienColor4 = 'green';
if (alienColor4 === 'yellow') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAge = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge < 20) {
    console.log("The person is a teenager.");
}
else if (personAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 29. Favorite Fruit: 
const favoritFruits = ["Apricote", "Banana", "Orange"];
if (favoritFruits.includes("Apple")) {
    console.log("I like to eat an apple");
}
else if (favoritFruits.includes("Mango")) {
    console.log('I like to eat Mango');
}
else if (favoritFruits.includes("Peach")) {
    console.log('I like to eat Peach');
}
else if (favoritFruits.includes("Grapes")) {
    console.log('I like to eat Grapes');
}
else {
    console.log('Your favorite fruit is not available');
}
//30. Hello Admin: 
let users1 = ['Ali', 'Saad', 'Zain', 'Bisma'];
for (let user of users1) {
    if (user === 'Admin') {
        console.log("Hello admin would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging again.`);
    }
}
