// ==========================================
// TASK 1 – FRUIT ARRAY
// ==========================================

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Complete array:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);


// ==========================================
// TASK 2 – UPDATE COLORS
// ==========================================

let colors = ["Red", "Blue", "Green", "Yellow"];

colors[1] = "Black";

console.log("Updated colors:", colors);


// ==========================================
// TASK 3 – LOOP STUDENT NAMES
// ==========================================

let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// ==========================================
// TASK 4 – TOTAL MARKS
// ==========================================

let marks = [80, 70, 90, 60, 85];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("Total =", total);


// ==========================================
// TASK 5 – ARRAY MULTIPLICATION
// ==========================================

let numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}


// ==========================================
// TASK 6 – STUDENT OBJECT
// ==========================================

let student = {
    name: "Arun",
    age: 20,
    course: "Computer Science",
    city: "Coimbatore"
};

console.log("Name:", student.name);
console.log("Course:", student.course);


// ==========================================
// TASK 7 – UPDATE EMPLOYEE
// ==========================================

let employee = {
    name: "Arun",
    salary: 25000,
    role: "Developer"
};

employee.salary = 30000;

console.log("Updated employee:", employee);


// ==========================================
// TASK 8 – ADD NEW PROPERTY
// ==========================================

let product = {
    name: "Laptop",
    price: 50000
};

product.brand = "Dell";

console.log("Product Name:", product.name);
console.log("Price:", product.price);
console.log("Brand:", product.brand);


// ==========================================
// TASK 9 – LOOP OBJECT
// ==========================================

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

for (let key in car) {
    console.log(key, car[key]);
}


// ==========================================
// TASK 10 – ARRAY OF OBJECTS
// ==========================================

let studentList = [
    {
        name: "Arun",
        mark: 80
    },
    {
        name: "Priya",
        mark: 90
    },
    {
        name: "Kumar",
        mark: 75
    }
];

for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i].name + " - " + studentList[i].mark);
}







