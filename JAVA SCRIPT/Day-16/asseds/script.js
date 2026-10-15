// Retrieve saved employees from localStorage
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Get HTML elements
const employeeForm = document.getElementById("employeeForm");
const employeeTableBody = document.getElementById("employeeTableBody");

// Display employees in the table
function displayEmployees() {
    employeeTableBody.innerHTML = "";

    employees.forEach(function(employee) {
        const row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>
                    <button
                        class="delete-btn"
                        data-id="${employee.id}"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        `;

        employeeTableBody.innerHTML += row;
    });
}

// Handle form submission
employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const department = document.getElementById("department").value;
    const salary = Number(document.getElementById("salary").value);

    // Validate all fields
    if (
        name === "" ||
        !Number.isInteger(age) ||
        age <= 0 ||
        department === "" ||
        !Number.isFinite(salary) ||
        salary <= 0
    ) {
        alert("Please enter valid details in all fields.");
        return;
    }

    // Create employee object with unique ID
    const employee = {
        id: Date.now().toString() + "-" + Math.random().toString(36).slice(2, 8),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    // Add employee to array
    employees.push(employee);

    // Save array in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Update table
    displayEmployees();

    // Clear form
    employeeForm.reset();

    alert("Employee registered successfully!");
});

// Handle Delete button clicks
employeeTableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const employeeId = event.target.dataset.id;

        // Remove employee from array
        employees = employees.filter(function(employee) {
            return employee.id !== employeeId;
        });

        // Update localStorage
        localStorage.setItem("employees", JSON.stringify(employees));

        // Refresh table
        displayEmployees();
    }
});

// Display saved employees when the page loads
displayEmployees();