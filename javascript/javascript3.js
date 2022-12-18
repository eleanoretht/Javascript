// Selecteurs
const button_pouce = document.querySelector("#pouce");
const button_coeur = document.querySelector("#coeur");
const button_surprise = document.querySelector("#surprise");
const button_applause = document.querySelector("#applause");
const button_remove = document.querySelector("#remove");
const button_emojis = document.querySelector(".boutons_emojis")
const button = document.querySelectorAll(".boutons_emojis button")
const list_emojis = document.querySelector("#list_emojis");

// Evenements
button_pouce.addEventListener("click", function() {
    const reaction = document.createElement("reaction");
    const pouce = document.createTextNode("👍");

    reaction.append(pouce);
    list_emojis.append(reaction)
})

button_coeur.addEventListener("click", function() {
    const reaction = document.createElement("reaction");
    const coeur = document.createTextNode("❤️");

    reaction.append(coeur);
    list_emojis.append(reaction)
})

button_surprise.addEventListener("click", function() {
    const reaction = document.createElement("reaction");
    const surprise = document.createTextNode("‼️");

    reaction.append(surprise);
    list_emojis.append(reaction)
})

button_applause.addEventListener("click", function() {
    const reaction = document.createElement("reaction");
    const applause = document.createTextNode("👏");

    reaction.append(applause);
    list_emojis.append(reaction)
})

button_emojis.addEventListener("click", function() {
    for (let i = 0; i < 4; i++) {
      button[i].classList.toggle("animation");
    }
})
