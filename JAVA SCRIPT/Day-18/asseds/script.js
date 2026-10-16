// Task 1: Closure
const createCounter = () => {
    let count = 0;

    return () => {
        count += 10;
        document.getElementById("output1").innerHTML += count + "<br>";
    };
};

const counter = createCounter();

function runCounter() {
    counter();
}


// Task 2: Callback
function calculateSalary(salary, callback) {
    callback(salary);
}

const addBonus = (salary) => {
    document.getElementById("output2").innerHTML +=
        "Salary After Bonus: " + (salary + 5000) + "<br>";
};

const deductSalary = (salary) => {
    document.getElementById("output2").innerHTML +=
        "Salary After Deduction: " + (salary - 2000) + "<br>";
};

function runSalary() {
    document.getElementById("output2").innerHTML =
        "Original Salary: 20000<br>";

    calculateSalary(20000, addBonus);
    calculateSalary(20000, deductSalary);
}


// Task 3: Promise
function checkResult(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mark >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }
        }, 2000);
    });
}

function runResult() {
    document.getElementById("output3").innerHTML = "Checking result...";

    Promise.allSettled([
        checkResult(75),
        checkResult(20)
    ]).then(results => {
        document.getElementById("output3").innerHTML =
            results.map(result => result.status === "fulfilled"
                ? result.value
                : result.reason
            ).join("<br>");
    });
}