const menu = document.querySelector("#menu");
menu.classList.add("menu")

const listElem = document.querySelectorAll("li");
const link = document.querySelectorAll("a");

menu.addEventListener("click", el => {
    el.preventDefault()

})
link.forEach(el => {
    el.addEventListener("click", (e) => {
        link.forEach(elem => {
            elem.classList.remove("collapsed")
            elem.parentElement.classList.remove("expand")
        })
        el.classList.add("collapsed")
        el.parentElement.classList.add("expand")

    })
})

listElem.forEach(el => {
    el.addEventListener("mouseover", e => {
        listElem.forEach(elem => {
            elem.classList.remove("active")
        })
        el.classList.add("active")
    })
})