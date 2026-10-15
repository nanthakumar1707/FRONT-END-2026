let employees = [];

document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let ageValue = document.getElementById("age").value;
    let department = document.getElementById("department").value.trim();
    let salaryValue = document.getElementById("salary").value;

    let age = Number(ageValue);
    let salary = Number(salaryValue);

    if (name === "" || department === "" ||
        ageValue === "" || salaryValue === "" ||
        !Number.isFinite(age) || age <= 0 ||
        !Number.isFinite(salary) || salary <= 0) {
        document.getElementById("message").textContent =
            "Enter valid details in all fields.";
        return;
    }

    let employee = { name, age, department, salary };
    employees.push(employee);

    displayEmployees();
    this.reset();

    document.getElementById("message").textContent =
        "Employee registered successfully!";
});

function displayEmployees() {
    let rows = "";

    employees.forEach(function(emp) {
        rows += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>`;
    });

    document.getElementById("employeeTable").innerHTML = rows;
}

// Task 2: Calculator

document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    if (x.trim() === "" || y.trim() === "") {
        document.getElementById("result").textContent =
            "Please enter both numbers.";
        return;
    }

    let a = Number(x);
    let b = Number(y);
    let op = document.getElementById("operation").value;

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        document.getElementById("result").textContent =
            "Enter valid numbers.";
        return;
    }

    calculate(a, b, op);
});

function calculate(a, b, op) {
    let result;

    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        if (b === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero!";
            return;
        }
        result = a / b;
    }

    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("result").textContent = "Result:";
});