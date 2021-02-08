const details = document.querySelectorAll(".car-detail");

details.forEach(element => {
    const toggle = element.parentElement.querySelector(".car-toggle-detail");
    toggle.addEventListener("click", () => {
        if (element.parentElement.classList.contains(".car-show-detail")) {
            element.style.display = "none"
            toggle.textContent = "POKAŻ DETALE"
            element.parentElement.classList.remove(".car-show-detail")
        } else {
            element.parentElement.classList.add(".car-show-detail")
            element.style.display = "block"
            toggle.textContent = "Schowaj"
        }
    })
})