document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(item) {
        return item.email.toLowerCase() === email.toLowerCase() &&
               item.password === password;
    });

    if (user) {
        sessionStorage.setItem("loggedInUser", user.email);

        alert("Login successful!");

        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").innerText =
            "Invalid email or password!";
    }
});