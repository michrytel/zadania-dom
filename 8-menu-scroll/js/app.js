const footer = document.querySelectorAll(".nav-el");
const links = document.querySelectorAll(".nav-link");

links.forEach(el => {
el.addEventListener('click', (e) => {
    e.preventDefault()
    footer.forEach(elem => {
        elem.classList.remove("nav-el-active")
    })
    el.parentElement.classList.add("nav-el-active")
})
})