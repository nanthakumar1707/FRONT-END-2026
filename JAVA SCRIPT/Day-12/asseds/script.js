// ==========================================
// TASK 1 – CHANGE HEADING TEXT
// ==========================================

let title = document.getElementById("title");

title.textContent = "Welcome to JavaScript";

title.style.color = "blue";

title.style.fontSize = "30px";


// ==========================================
// TASK 2 – CHANGE PARAGRAPH STYLES
// ==========================================

let paragraphs = document.getElementsByClassName("para");

paragraphs[0].style.color = "red";

paragraphs[1].style.backgroundColor = "yellow";

paragraphs[2].style.fontSize = "25px";


// ==========================================
// TASK 3 – UPDATE IMAGE AND LINK
// ==========================================

let image = document.querySelector("#myImage");

image.src = "https://placehold.co/400x300/87CEEB/000000";

image.style.width = "200px";


let link = document.getElementById("myLink");

link.href = "https://www.google.com";

link.textContent = "Visit Google";


// ==========================================
// TASK 4 – UPDATE INPUT PROPERTIES
// ==========================================

let username = document.getElementById("username");

username.value = "Arun";

username.style.backgroundColor = "lightyellow";


let email = document.querySelector("#email");

email.value = "arun@gmail.com";


let submitButton = document.getElementById("submitBtn");

submitButton.disabled = true;


// ==========================================
// TASK 5 – UPDATE MULTIPLE ELEMENTS
// ==========================================

let headings = document.querySelectorAll(".heading");


// Change heading text

headings[0].textContent = "HTML";

headings[1].textContent = "CSS";

headings[2].textContent = "JavaScript";

headings[3].textContent = "React";

headings[4].textContent = "Node.js";


// Change each heading color individually

headings[0].style.color = "red";

headings[1].style.color = "blue";

headings[2].style.color = "green";

headings[3].style.color = "orange";

headings[4].style.color = "purple";