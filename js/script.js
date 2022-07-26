console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-buttonChange");

button.addEventListener("click", () => {
    body.classList.toggle("bodychange");

    themeName.innerText = body.classList.contains("bodychange") ? "jasny" : "ciemny";
});