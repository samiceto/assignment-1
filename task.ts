// task 1 

//console.log("All required softwares are installed properly")
//task 2

// let personName: string="Sami";
// console.log(`Hello ${personName}, would you like to learn some pythen?`);


//task 3


// let personName: string="sami";
// //lowercase
// console.log("Lowercase", personName. toLocaleLowerCase());
// //uppercase
// console.log("uppercase", personName.toUpperCase());
// //titlecase
// console.log("titlecase", personName.replace(/\b\w/g,c=> c.toUpperCase()));


//task 4


// //Albert Einstein once said, 
// //“A person who never made a mistake never tried anything new.”

// let quote: string="A person who never made a mistake never tried anything new.";
// let auther: string="Albert Einstein";
// console.log(`${auther}, once said"${quote},"`);

//task 5


// let quote: string="A person who never made a mistake never tried anything new.";
// let auther: string="Albert Einstein";
// //console.log(`${auther}, once said"${quote},"`);
// let famous_person: string=`${auther}`;
// let massege: string=`${famous_person} once said ${quote}`;
// console.log(`${massege}`);



//task 6

// let personName: string="\t\n Samiullah \n\t";
// console.log("Origenal", personName);
// console.log("Stripped", personName.trim());


//task 7,8

// console.log(5+3);
// console.log(9-1);
// console.log(4*2);
// console.log(32/4);



// // task 9

// let favorateNumber: number=1;
// console.log(`My favorate number is always ${favorateNumber}.`);



//task 10

// // this is task nine MY name is Samiullah 
// // today ime its 9.20 15feb 2024
// // the perpose of this program is to let people now about my favorate number.
// let favorateNumber: number=1;
// console.log(`My favorate number is always ${favorateNumber}.`);
// //this is task 6 to print name with white space 
// // my name is samiullah and today ime its 9.20 15feb 2024
// let personName: string="\t\n Samiullah \n\t";
// console.log("Origenal", personName);
// console.log("Stripped", personName.trim());



//task 11

// let names: string []= ["Ali", "Samiullah", "Wjahat", "Sabir"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);



//task 12

// let names: string []= ["Ali", "Samiullah", "Wjahat", "Sabir"];
// let message: string="Welcom Home again buddy";
// console.log(`${names[0]}, ${message}`);
// console.log(`${names[1]}, ${message}`);
// console.log(`${names[2]}, ${message}`);
// console.log(`${names[3]}, ${message}`);



//task 13

// let arr: string[]=["Motor sycle", "Honda", "Grass", "Water"];
// let statement: string="I love";
// console.log(`${statement},travling by ${arr[0]}`);
// console.log(`${statement},geting back by ${arr[1]}`);
// console.log(`${statement},walking on ${arr[2]}`);
// console.log(`${statement},showering with fresh ${arr[3]}`);


//task 14

// let arr: string[]=["ali", "Habib", "Sami",];
// arr.map((itme)=>(
//     console.log(`${itme}, "we are plaining get to gether tody in evening and this invitation card is to inform that you are invited for dinner will have great time and gossip again see you there";

//     `)
// )) 

//task 15

//  let arr: string[]=["ali", "Habib", "Sami",];
// let canNotarr: string="ali";
//console.log(`${canNotarr}, is not comming`);
// let newone: string="zafar"
// arr[arr.indexOf(canNotarr)]=newone;
// arr.map((itme)=>(
//     console.log(`${itme}, "we are plaining get to gether tody in evening and this invitation card is to inform that you are invited for dinner will have great time and gossip again see you there";`)
// )) 
//task 16

// let guestBegin: string="Majid";
// arr.unshift (guestBegin)
//console.log(arr)

//  let middleGuest: string="naaz";
//  let middleIndex = arr.length/2
//  arr.splice(middleIndex,0,middleGuest)
// console.log(arr)

// arr.push("Fatma")
// console.log(arr)

// arr.map((item)=>(
//     console.log(`Dear ${item}, you all are invited`)
// ));

//task 17
// console.log("i can only invite only two people for dinner")
// while(arr.length>2){
// let removeGuest=arr.pop()
//     console.log(`Dear ${removeGuest}, you can not come to the dinner`)
// }
// arr.map((item)=>(
//     console.log(`Dear${item}, you are still invited`)
// ));

// task 18


// let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

// // Print the array in its original order
// console.log("Original Order:", placesToVisit);

// // Print the array in alphabetical order without modifying the original list
// console.log("Alphabetical Order:", [...placesToVisit].sort());

// // Confirm the array is still in its original order
// console.log("Original Order (confirm):", placesToVisit);

// // Print the array in reverse alphabetical order without modifying the original list
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// // Confirm the array is still in its original order
// console.log("Original Order (confirm):", placesToVisit);

// // Reverse the order of the original list
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);

// // Reverse the order again to get back to the original order
// placesToVisit.reverse();
// console.log("Back to Original Order:", placesToVisit);

// // Sort the array in alphabetical order
// placesToVisit.sort();
// console.log("Alphabetical Order:", placesToVisit);

// // Sort the array in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Reverse Alphabetical Order:", placesToVisit);


//task 19
// console.log("By reaching the Question 18 I found that my guest list is empty i have no guest left. so i'm inviting zero guest");



//task 20



// // Array of languages
// let languages: string[] = ["JavaScript", "Python", "Java", "C#", "Ruby"];

// // Print the list of languages
// console.log("List of Languages:", languages);

// task 21
// let person: {name:string, fname:string, age:number,}={name:"Ali", fname:"naaz", age:25}
// console.log(person)

//task 22
// const days: string[]=["sunday", "monday", "tusday", "wednessday","thursday", "friday","saterday"]
// console.log(days[7])
// console.log(days[6])




//task 23

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True otherwise I predict Fals")

// console.log(car == 'subaru')
// console.log(car == 'civic')

// let number: any=25
// console.log("is number == 25'? I predict True Otherwise I predict Fals")
// console.log(number===25)
// console.log(number==="25")

// let freind: string='yasir'
// console.log(freind ==='yasir')
// console.log(freind==='abid')

// let myfreind: string='boring'
// console.log(myfreind=='boring')
// console.log(myfreind=='cool')


// let she: string='girl'
// console.log(she=='girl')
// console.log(she=='boy')

// task 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// let string1: string="apple";
// let string2: string="mango";
// console.log(string1===string2)
// console.log(string1!== string2)

// • Tests using the lower case function
// const mixedcaseStrng: string="Helloworld";
// console.log(mixedcaseStrng.toLowerCase()==="helloworld")


// 

// const num1: number= 10
// const num2: number=5

// console.log(num1===num2)
// console.log(num1!==num2)
// console.log(num1<num2)
// console.log(num1>num2)
// console.log(num1<=num2)
// console.log(num1 >= num2)



// • Tests using "and" and "or" operators
// const condition1: string="true";
// const conditon2: string="false";
// console.log(condition1 && conditon2)
// console.log(condition1 || conditon2)


// • Test whether an item is in a array
// • Test whether an item is not in a array
// const Fruits: string[]=["Apple", "Mango", "Aaam"]
// console.log(Fruits.includes("Apple"))
// console.log(Fruits.includes("apple"))


//task 25

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)




//let alianColor: string="green";
//if (alianColor=== "green"){
   // console.log(`the player got 5 points`)
//}
// alianColor= "red"
// if (alianColor=="green"){
//     console.log()
// }
// else{
//     console.log(`No it's not`)
// }
 


//task 26

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


// let alianColor: string="green";
// alianColor= "red"
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else{
//     console.log(`the player got 10 points`)
// }


//task 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// let alianColor: string="green";
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor==="red"){
//     console.log(`the player got 15 points`)
// }





// let alianColor: string="yellow";
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor==="red"){
//     console.log(`the player got 15 points`)
// }






// let alianColor: string="red";
// if (alianColor=== "green"){
//    console.log(`the player got 5 points`)
// }

// else if(alianColor==="yellow"){
//     console.log(`the player got 10 points`)
// }
// else if(alianColor==="red"){
//     console.log(`the player got 15 points`)
// }


//task 28

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age: number=2
// if (age <2){
//     console.log(`the person is a baby`)
// }
// else if(age>=2 && age <4){
//     console.log(`The person is toodler`)
// }
// else if(age>=4 && age <13){
//     console.log(`The person is kid`)
// }
// else if(age>=13 && age <20){
//     console.log(`The person is teenager`)
// }
// else if(age>=20 && age <65){
//     console.log(`The person is adult`)
// }
// else if(age>=65){
//     console.log(`The person is elder`)
// }



//task 29''

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// const favoriteFruits: string[]=["Apple", "Mango", "Banana", "bike"];
// if (favoriteFruits.includes("Apple")){
//     console.log("Apple is your favorite fruit")
// }
// if (favoriteFruits.includes("Mango")){
//     console.log("Mango is your favorite fruit")
// }
// if (favoriteFruits.includes("Banana")){
//     console.log("Banana is your favorite fruit")
// }
// if (favoriteFruits.includes("bike")){
//     console.log("bike is not a fruit")
// }
// else (favoriteFruits.includes("car")){
//     console.log("This is not in the list")
// }


//task 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let employee: string[]=["Admin", "Shayan","Asif"]
// for (let i=0; i<employee.length; i++){
//     if (employee[i] =="Admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
//     else {
//         console.log(`Hello ${employee[1]}`)
//     }
// }



//task 31

// let users: string[] = ["Alice", "Bob", "Charlie"]; // Replace this with your array of usernames

// if (users.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     let age: number = 25; // You can set the age value accordingly

//     if (age < 2) {
//         console.log("The person is a baby.");
//      } else if(age>=2 && age <4){
//     console.log(`The person is toodler`)
// }
// else if(age>=4 && age <13){
//     console.log(`The person is kid`)
// }
// else if(age>=13 && age <20){
//     console.log(`The person is teenager`)
// }
// else if(age>=20 && age <65){
//     console.log(`The person is adult`)
// }
// else if(age>=65){
//     console.log(`The person is elder`)
// }

//     // Remove all usernames from the array
//     users = [];
// }


//task 32

// const current_users: string[] = ['Alice', 'Bob', 'Charlie', 'John', 'Eve'];
// const new_users: string[] = ['Eric', 'john', 'Mallory', 'Dave', 'ALICE'];

// for (const new_username of new_users) {
//     const isUsernameTaken = current_users.some(
//         (existing_username) => existing_username.toLowerCase() === new_username.toLowerCase()
//     );

//     if (isUsernameTaken) {
//         console.log(`Username '${new_username}' is not available. Please choose a different one.`);
//     } else {
//         console.log(`Username '${new_username}' is available.`);
//     }
// }

// task 33
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numbers) {
//     let ordinalEnding: string;

//     if (number === 1) {
//         ordinalEnding = 'st';
//     } else if (number === 2) {
//         ordinalEnding = 'nd';
//     } else if (number === 3) {
//         ordinalEnding = 'rd';
//     } else {
//         ordinalEnding = 'th';
//     }

//     console.log(`${number}${ordinalEnding}`);

//    }
//task34


// const favoritePizzas: string[] = ['Papa john', 'Pizza hurt', 'BBQ pizza'];

// //Print pizza names
// for (const pizza of favoritePizzas) {
//     console.log(pizza);
// }

// //Print sentences about each pizza
// for (const pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// //Additional line outside the loop
// console.log("I'm in love with fast food. i Knon it's very harmfull for the health but who cares. I really love pizza!");

//task 35




// const favoriteAnimal: string[] = ['Goat', 'Deer', 'Cow'];


// for (const animal of favoriteAnimal) {
//     console.log(animal);
// }

// for (const animal of favoriteAnimal) {
//     console.log(`I like ${animal} as pet.`);
// }


// console.log("The reason i like these animals becouse all of them halal, clean and friendly animals and the best thing in comman in all of these three is they all are eatable.");

//task 36


// function make_shirt(size: string, message: string): void {
//    console.log(`Shirt size: ${size}, Message: ${message}`);
// }
//  //Call the function
// make_shirt('Large', 'Hello World!');


//task 37

// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//    console.log(`Shirt size: ${size}, Message: ${message}`);
// }

// // Create large shirt with default message
// make_shirt();

// // Create medium shirt with default message
// make_shirt('Medium');

// // Create shirt of any size with a different message
// make_shirt('Small', 'Custom Message');


//task 38


// function describe_city(city: string, country: string = 'Unknown Country'): void {
//    console.log(`${city} is in ${country}.`);
// }


// describe_city('Karachi', 'Pakistan');
// describe_city('Tokyo', 'Japan');
// describe_city('Paris'); // Default country used (Unknown Country)

//task 39

// function city_country (city: string, country: string): void {
//    console.log(`${city}, ${country}.`);
// }

//    city_country(`karachi`,`pakistan`);
//    city_country(`tokio`,`Japan`);
//    city_country(`kabul`,`Afghanistan`);



// task40


// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }

// function make_album(artist: string, title: string, tracks?: number): Album {
//     const album: Album = { artist, title };

//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

//  //Create three dictionaries representing different albums
// const album1 = make_album('Artist1', 'Album1');
// const album2 = make_album('Artist2', 'Album2', 12);
// const album3 = make_album('Artist3', 'Album3', 8);

//  //Print each return value
// console.log(album1);
// console.log(album2);
// console.log(album3);

//task 41
// function show_magicians(magicians: string[]): void {
//    for (const magician of magicians) {
//        console.log(magician);
//    }
// }

//  //Array of magician's names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

//  //Call the function to print magician names
// show_magicians(magicianNames);

//task 42

// function show_magicians(magicians: string[]): void {
//    for (const magician of magicians) {
//        console.log(magician);
//    }
// }

// function make_great(magicians: string[]): string[] {
//    return magicians.map((magician) => `the Great + ${magician}`);
// }

// //Array of magician's names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// //Call make_great() to modify the array
// const greatMagicians = make_great(magicianNames);

// //Call show_magicians() to see the modified list
// show_magicians(greatMagicians);


//task 43

// function show_magicians(magicians: string[]): void {
//    for (const magician of magicians) {
//        console.log(magician);
//    }
// }

// function make_great(magicians: string[]): string[] {
//    return magicians.map((magician) => `the Great ${magician}`);
// }

// // Array of magician's names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// // Call make_great() to modify the array
// const greatMagicians = make_great([...magicianNames]); // Use the spread operator to create a copy

// // Call show_magicians() to see the original and modified arrays
// console.log('Original Magicians:');
// show_magicians(magicianNames);

// console.log('\nMagicians with "the Great":');
// show_magicians(greatMagicians);


//task44


// function order_sandwich(...items: string[]): void {
//    if (items.length === 0) {
//        console.log('You ordered an empty sandwich. Please choose some items.');
//    } else {
//        console.log(`Your sandwich includes: ${items.join(', ')}`);
//    }
// }

// // Call the function with different numbers of arguments
// order_sandwich('Ham', 'Cheese', 'Lettuce');
// order_sandwich('Turkey', 'Swiss');
// order_sandwich(); // Empty sandwich

// task 45

// interface Car {
//    manufacturer: string;
//    model: string;
//    [key: string]: string; // Additional optional properties
// }

// function store_car_info(manufacturer: string, model: string, ...options: [string, string][]): Car {
//    const carInfo: Car = { manufacturer, model };

//    for (const [key, value] of options) {
//        carInfo[key] = value;
//    }

//    return carInfo;
// }

// // Call the function with required and optional information
// const carDetails = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'Sunroof']);

// // Print the returned object
// console.log(carDetails);