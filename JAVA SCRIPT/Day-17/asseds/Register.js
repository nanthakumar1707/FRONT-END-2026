document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("message").innerText =
            "Passwords do not match!";
        return;
    }

    if (password.length < 6) {
        document.getElementById("message").innerText =
            "Password must contain at least 6 characters!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(function(user) {
        return user.email.toLowerCase() === email.toLowerCase();
    });

    if (existingUser) {
        document.getElementById("message").innerText =
            "Email already registered!";
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    window.location.href = "login.html";
});