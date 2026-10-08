// ==========================================
// TASK 1 – GLOBAL AND FUNCTION SCOPE
// ==========================================

console.log("===== TASK 1 =====");

let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";

    console.log("Company:", company);
    console.log("Employee:", employee);
}

showEmployee();

// employee cannot be accessed here
// console.log(employee);  // ERROR

console.log("Company is Global Scope");
console.log("Employee is Function Scope");
console.log("employee cannot be accessed outside the function.");


// ==========================================
// TASK 2 – BLOCK SCOPE
// ==========================================

console.log("===== TASK 2 =====");

if (true) {

    let age = 25;
    const city = "Chennai";

    console.log("Inside Block - Age:", age);
    console.log("Inside Block - City:", city);
}

// These will cause an ERROR because let and const
// are block scoped.

// console.log("Outside Block - Age:", age);
// console.log("Outside Block - City:", city);


// ----- Using var -----

if (true) {

    var newAge = 25;

    console.log("Inside Block using var:", newAge);
}

console.log("Outside Block using var:", newAge);


// ==========================================
// TASK 3 – HOISTING
// ==========================================

console.log("===== TASK 3 =====");

// Example 1 – var

console.log("Value of a:", a);

var a = 10;


// Example 2 – let

// console.log("Value of b:", b);
// let b = 20;

// Uncomment the above code to see:
// ReferenceError: Cannot access 'b' before initialization


// Example 3 – Function Hoisting

greet();

function greet() {
    console.log("Welcome to JavaScript");
}


// ==========================================
// TASK 4 – CLOSURE COUNTER
// ==========================================

console.log("===== TASK 4 =====");

function createCounter() {

    let count = 0;

    function counter() {
        count = count + 1;
        console.log(count);
    }

    return counter;
}

let myCounter = createCounter();

myCounter();
myCounter();
myCounter();


// ==========================================
// TASK 5 – CALLBACK CALCULATOR
// ==========================================

console.log("===== TASK 5 =====");

function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(20, 10, add);

calculate(20, 10, subtract);