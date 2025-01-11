// Arrays

// -----

// Lets consider we have 1000 persons name

// 1000 line of code
// 4 byte

// 4*1000 = 1 to 4KB
// 1000 Variables Unmanageable

let name = "Ali";
let name1 = "Zee";
let name2 = "Zeee";
let name3 = "Zeedsfr";
let name4 = "Zesdfe";
let name5 = "Zedsfe";
let name6 = "Zedsfe";
// ...
// False Method

// Arrays: A Data Structure: A way of storing the data
//  Box, Metal Plate, Table :  Consecutive order ma line ba line

// Ali, Zee, Zeee, Zeedsfr......
let names = [
  "Ali",
  "Zee",
  "Zeee",
  "Zzeedsfr",
  "Zesdfe",
  "Tom",
  "Jerry",
  "Los Angeles",
  1,
  2,
  true,
];
//            0      1       2         3          4 ... so   -> Index Numbers
//  There is no negative indexing

console.log(names[10]);

console.log(names.length);

// Adding Data
names.push("Lahore");
names.push(1000);
names.push(789797);

names.unshift(8787);

// Removing Data

// End
names.pop();

console.log(names);
names.shift();

console.log(names);

let elementAt = names.indexOf("Ali");

if (elementAt < 0) {
  alert("Unable to find the respective element");
} else {
  alert("Element finded at: " + elementAt);
}

let firstName = "Zeeshan";
let lastName = "Ali";

let fullName = firstName + " " + lastName; // Concatenation
console.log(fullName);

console.log("I am this" + 5);
console.log(1 + 5);
console.log(1 + "My Age is");

let reveredArr = names.reverse();
console.log(reveredArr);
console.log(reveredArr[0]);

console.log(names.join(","));

// To much similar context data to handle that,
// Variables

// Piece of Code again and again repeating

// Functions

// 2*1000 = 2000

// Team work -> 1 File is file how 10 people on 1 file?

//  Code/Work Divide krna ka lia, we make functions

// Function Definition
function sayGreet() {
  console.log("Greet");
  alert("Greet");
}

function calculateSum() {
  let num1 = prompt("Enter value 1");
  let num2 = prompt("Enter value 2");

  num1 = Number(num1);
  num2 = Number(num2);

  console.log(num1 + num2);
}

// calculateSum()
// calculateSum()

// Parameters
function checkAge(age) {
  if (age < 18) {
    console.log("The person is under 18");
  } else {
    console.log("The person is over or equal to 18");
  }
}

// Function calling & passing arguments
checkAge(20);

// Function with Return Types
function checkAgeValidity(age) {
  if (age < 18) {
    return "The person is under 18";
  } else {
    return "The person is over or equal to 18";
  }
}

let response = checkAgeValidity(30);
console.log(response);

function add(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

let result = add(4, 5, 6);
console.log(result);
