// Task 1: Student Details

console.log("TASK 1: Student Details");

let studentName = "Nantha";
let age = 23;
let courseCompleted = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course Completed:", courseCompleted);


// Task 2: Salary Calculation
console.log("\nTASK 2: Salary Calculation");

let salary = 15000;
salary = salary + 5000;

console.log("Updated Salary:", salary);


// Task 3: Even or Odd
console.log("\nTASK 3: Even or Odd");

let number = 25;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// Task 4: Data Type Checking
console.log("\nTASK 4: Data Type Checking");

let name = "Arun";
let ageValue = 25;
let isCompleted = true;
let value;

console.log("Name:", typeof name);
console.log("Age:", typeof ageValue);
console.log("Completed:", typeof isCompleted);
console.log("Value:", typeof value);


// Task 5: Swap Two Numbers
console.log("\nTASK 5: Swap Two Numbers");

let a = 10;
let b = 20;

console.log("Before Swapping: a =", a, ", b =", b);

let temp = a;
a = b;
b = temp;

console.log("After Swapping: a =", a, ", b =", b);
