console.log("TASK 1 - DOUBLE ALL NUMBERS");

let numbers1 = [10, 20, 30, 40, 50];
let doubled = numbers1.map(num => num * 2);
console.log(doubled);


console.log("\nTASK 2 - GET EVEN NUMBERS");

let numbers2 = [10, 15, 20, 25, 30, 35, 40];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers);


console.log("\nTASK 3 - FIND FIRST NUMBER");

let numbers3 = [10, 25, 35, 50, 60];
let firstNumber = numbers3.find(num => num > 30);
console.log(firstNumber);


console.log("\nTASK 4 - FIND STUDENT");

let students = [
    { id: 1, name: "Arun", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];

let studentResult = students.find(student => student.id === 2);
console.log(studentResult);


console.log("\nTASK 5 - FILTER EMPLOYEES");

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let filteredEmployees = employees.filter(emp => emp.salary >= 30000);
console.log(filteredEmployees);


console.log("\nTASK 6 - GET ONLY NAMES");

let employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);


console.log("\nTASK 7 - CALCULATE TOTAL");

let prices = [100, 200, 300, 400];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


console.log("\nTASK 8 - CHECK PASS STATUS");

let marks = [75, 80, 35, 90, 65];

let hasBelow40 = marks.some(mark => mark < 40);
let allAbove35 = marks.every(mark => mark >= 35);

console.log("Is there at least one mark below 40?", hasBelow40);
console.log("Are all marks 35 or above?", allAbove35);


console.log("\nTASK 9 - FOR...OF");

let skills = ["HTML", "CSS", "JavaScript", "React"];

for (let skill of skills) {
    console.log(skill);
}


console.log("\nTASK 10 - FOR...IN");

let student = {
    name: "Arun",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};

for (let key in student) {
    console.log(key, student[key]);
}
