"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 41. Magicians: 
const magicians = ["Jamal", "Asad", "Kamran"];
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magician(magicians);
// 42.	Great Magicians: 
const magicians1 = ["Jamal", "Asad", "Kamran"];
function make_great(magicians1) {
    for (let magician1 of magicians1) {
        console.log(`The Great ${magician1}`);
    }
}
show_magician(magicians1);
// 43. Unchanged Magicians: 
let magicians2 = ["Akmal", "Kamran", "Safdar"];
function show_magicians(magicians) {
    magicians2.forEach((magician) => {
        console.log(magician);
    });
}
function make_great2(magicians2) {
    for (let i = 0; i < magicians2.length; i++) {
        magicians2[i] = magicians2[i] + " the Great";
    }
}
make_great2(magicians2);
show_magicians(magicians2);
// 44.	Sandwiches: 
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("beef", "cheese");
make_sandwich("Chicken", "lettuce", "tomato");
make_sandwich("Pickles", "cheese", "mustard", "chillimayo");
// 45 Cars: Write a function that stores information about a car in a Object. 
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car = value));
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
