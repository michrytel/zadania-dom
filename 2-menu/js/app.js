let li = document.querySelectorAll(".nav-el");
let a = document.querySelectorAll(".nav-el a");

console.log(li);
console.log(a);
a.forEach(el => {
    el.setAttribute("href", "#")
})
li.forEach(el => {
    el.classList.remove("nav-el-active")
    el.addEventListener("click", e => {
        li.forEach(el => {
            el.classList.remove("nav-el-active")

        })
        el.classList.add("nav-el-active")
    })
})