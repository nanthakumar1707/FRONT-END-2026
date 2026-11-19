// TASK 1 - CHANGE HEADING COLOR

document.getElementById("btn1").addEventListener("click", function() {
    let heading = document.getElementById("heading1");

    heading.style.color = "red";
    heading.style.fontSize = "30px";
});


// TASK 2 - CHANGE BOX BACKGROUND

document.getElementById("btn2").addEventListener("click", function() {
    let box = document.getElementById("box");

    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

document.getElementById("btn3").addEventListener("click", function() {
    let box = document.getElementById("box");

    box.style.backgroundColor = "yellow";
    box.style.color = "black";
});


// TASK 3 - SHOW AND HIDE

document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("para1").style.display = "none";
});

document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("para1").style.display = "block";
});


// TASK 4 - TOGGLE SHOW / HIDE

document.getElementById("btn6").addEventListener("click", function() {
    let heading = document.getElementById("heading2");

    if (heading.style.display === "none") {
        heading.style.display = "block";
    } else {
        heading.style.display = "none";
    }
});


// TASK 5 - DARK MODE / LIGHT MODE

document.getElementById("btn7").addEventListener("click", function() {
    let theme = document.getElementById("theme");

    theme.classList.toggle("dark");
    theme.classList.toggle("light");
});