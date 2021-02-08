const add = document.querySelector("#add");
const elementList = document.querySelector(".list");
const element = document.querySelector(".element");
let clone = element.querySelector(".clone")
let del = element.querySelector(".delete");
let i = 2

const cloning = (el) => {
    el.children[1].addEventListener("click", e => {
        let cln = el.cloneNode(true)
        elementList.append(cln)
        cloning(cln)
        deleting(cln)
    })
}
const deleting = (el) => {
    el.children[2].addEventListener("click", e => {
        el.remove()
    })
}
cloning(element)
deleting(element)


add.addEventListener("click", e => {
    let cln = element.cloneNode(true)
    cln.children[0].children[0].innerText = i;
    i++;
    elementList.append(cln);
    cloning(cln)
    deleting(cln)
})

