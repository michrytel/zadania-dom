const ul = document.querySelector("ul");
console.log(ul);

ul.classList.add("menu")

const lis = ul.querySelectorAll("li");
console.log(lis);

lis[0].classList.add("first")
ul.lastElementChild.classList.add("last")
lis[2].classList.add("active")

const links = ul.querySelectorAll("a");
console.log(links);

let popup = function (event) {

}
links.forEach(el => {
    el.title = "Przejdz na strone " + el.innerText
    el.href = "#"
    let popup = function (event) {
        alert("kliknieto " + el.innerText)
    }
    el.addEventListener("click", popup)
    if (el.parentElement.classList.contains("active")) {
        el.removeEventListener("click", popup,)
    }
})


