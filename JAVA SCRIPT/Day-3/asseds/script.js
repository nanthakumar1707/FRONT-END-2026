// TASK 1 - SHOPPING BILL

let shirtPrice = 1200;
let quantity = 3;
let deliveryCharge = 100;

let productTotal = shirtPrice * quantity;
let finalBill = productTotal + deliveryCharge;

document.getElementById("task1").innerHTML =
    "Shirt Price: ₹" + shirtPrice + "<br>" +
    "Quantity: " + quantity + "<br>" +
    "Product Total: ₹" + productTotal + "<br>" +
    "Delivery Charge: ₹" + deliveryCharge + "<br>" +
    "Final Bill: ₹" + finalBill;

console.log("Task 1 - Shopping Bill");
console.log("Shirt Price: ₹" + shirtPrice);
console.log("Quantity: " + quantity);
console.log("Product Total: ₹" + productTotal);
console.log("Delivery Charge: ₹" + deliveryCharge);
console.log("Final Bill: ₹" + finalBill);


// TASK 2 - EMPLOYEE SALARY

let salary = 30000;
let bonus = 5000;
let tax = 2000;

salary += bonus;
salary -= tax;

document.getElementById("task2").innerHTML =
    "Salary: ₹30000<br>" +
    "Bonus: ₹" + bonus + "<br>" +
    "Tax: ₹" + tax + "<br>" +
    "Final Salary: ₹" + salary;

console.log("Task 2 - Employee Salary");
console.log("Salary: ₹30000");
console.log("Bonus: ₹" + bonus);
console.log("Tax: ₹" + tax);
console.log("Final Salary: ₹" + salary);


// TASK 3 - BANK ACCOUNT

let balance = 20000;
let deposit = 5000;
let withdrawal = 3000;

balance += deposit;
balance -= withdrawal;

document.getElementById("task3").innerHTML =
    "Starting Balance: ₹20000<br>" +
    "Deposit: ₹" + deposit + "<br>" +
    "Withdrawal: ₹" + withdrawal + "<br>" +
    "Final Balance: ₹" + balance;

console.log("Task 3 - Bank Account");
console.log("Starting Balance: ₹20000");
console.log("Deposit: ₹" + deposit);
console.log("Withdrawal: ₹" + withdrawal);
console.log("Final Balance: ₹" + balance);


// TASK 4 - STUDENT MARKS

let tamil = 80;
let english = 75;
let maths = 90;
let science = 85;
let computer = 95;

let totalMarks = tamil + english + maths + science + computer;
let averageMarks = totalMarks / 5;

document.getElementById("task4").innerHTML =
    "Tamil: " + tamil + "<br>" +
    "English: " + english + "<br>" +
    "Maths: " + maths + "<br>" +
    "Science: " + science + "<br>" +
    "Computer: " + computer + "<br>" +
    "Total Marks: " + totalMarks + "<br>" +
    "Average Marks: " + averageMarks;

console.log("Task 4 - Student Marks");
console.log("Tamil: " + tamil);
console.log("English: " + english);
console.log("Maths: " + maths);
console.log("Science: " + science);
console.log("Computer: " + computer);
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);


// TASK 5 - NUMBER OPERATIONS

let number = 20;

number += 10;
number *= 2;
number -= 20;
number /= 4;
number %= 3;

document.getElementById("task5").innerHTML =
    "Final Value: " + number;

console.log("Task 5 - Number Operations");
console.log("Final Value: " + number);