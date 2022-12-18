// Selecteurs
const body = document.querySelector("body");
const button = document.querySelector("#btn");
const paragraphs = document.querySelector("p");
const logo = document.querySelector("logo_accueil")
const h1 = document.querySelector("h1");

// Evenements
button.addEventListener("click", function() {
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = "#222222";
        h1.style.color = "#FFFFFF";
    } else {
        body.style.backgroundColor = "#FFFFFF";
        h1.style.color = "#000000"

    }
})
