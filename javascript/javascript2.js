// Selecteurs
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const body = document.querySelector("body");
const button = document.querySelector("#button");

// Evenements
button.addEventListener("click", function() {
    body.classList.toggle("body");
    if (h1.style.color === "rgb(255, 255, 255)") {
        h1.style.color = "#000000"
    } else {
        h1.style.color = "#FFFFFF"
        console.log(h1.style.color)
    }
})