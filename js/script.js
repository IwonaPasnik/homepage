{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-buttonChange");
        body.classList.toggle("bodychange");
        themeName.innerText = body.classList.contains("bodychange") ? "jasny" : "ciemny";
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
        welcome();
    }

    init();
}