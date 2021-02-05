{
    let first = document.querySelectorAll(".first-attempt");
    console.log(first);

    first.forEach(el => {
        el.classList.add("active")
    })

    let secound = document.querySelectorAll("[data-border]");
    console.log(secound);
    secound.forEach(element => {
        element.setAttribute("data-el-active", null)
    })
}

{
    let element = document.querySelectorAll(".hack");
    element.forEach(e => {
        e.setAttribute("title", "hacking")
    })
}

{
    let element = document.querySelectorAll(".hijack");
    element.forEach(e => {
        e.removeAttribute("title")
    })
}

{
    let element = document.querySelectorAll(".st1.st2");
    console.log(element)
      element.forEach(e => {
        e.style.color = "red"
        e.style.fontSize = "15px"
    })

}
{
    let element = document.querySelectorAll(".attrib");
    element.forEach(e => {
        e.removeAttribute("data-hack-inactive")
        e.setAttribute("data-hack-active", null)
    })
}
{
    let element = document.querySelectorAll(".last-attempt");
    console.log(element);
    element.forEach(e => {
        e.firstElementChild.style.display = "none"
    })
}