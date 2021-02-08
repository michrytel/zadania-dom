//to jest tablica z miastkami
//w tym pliku nic nie ruszaj
var cities = [
    {
        name : "Warszawa",
        population : 1735000,
        map_x: 460,
        map_y : 260,
        href: "http://www.warszawa.pl/"
    },
    {
        name : "Gdańsk",
        population : 459919,
        map_x: 313,
        map_y : 53,
        href: "http://www.gdansk.pl/"
    },
    {
        name : "Zakopane",
        population : 27424,
        map_x: 400,
        map_y : 600,
        href: "http://www.zakopane.pl/"
    },
    {
        name : "Poznań",
        population : 542689,
        map_x: 180,
        map_y : 270,
        href: "http://www.poznan.pl/"
    },
    {
        name : "Lublin",
        population : 341975,
        map_x: 508,
        map_y : 405,
        href: "http://www.lublin.pl/"
    },
    {
        name : "Wrocław",
        population : 628589,
        map_x: 185,
        map_y : 410,
        href: "http://www.wroclaw.pl/"
    },
    {
        name : "Bialystok",
        population : 292843,
        map_x: 620,
        map_y : 185,
        href: "http://www.bialystok.pl/"
    }
];
let map = document.querySelector(".map");
let a = document.createElement("a")
let tooltip = document.createElement("div")
tooltip.style.left = `-9999px`
tooltip.style.top = `-9999px`
let body = document.querySelector("body");
body.appendChild(tooltip)
tooltip.classList.add("map-tooltip")




cities.forEach(el => {
    let cln = a.cloneNode(true)
    cln.href = el.href
    cln.classList.add("map-marker")
    cln.dataset.name = el.name
    cln.dataset.population = el.population
    cln.style = `left: ${el.map_x}px; top: ${el.map_y}px`
    cln.innerText = el.name
    map.append(cln)
})

let markers = document.querySelectorAll(".map-marker");
markers.forEach(el => {
    el.addEventListener("mouseover", e => {
        tooltip.innerHTML = `<h2>${el.dataset.name}</h2> <div>Population: <strong>${el.dataset.population}</strong></div>`
        let x = e.clientX + 30
        let y = e.clientY + 30
        tooltip.style.left = x + "px"
        tooltip.style.top = y + "px"

    })
})

markers.forEach(el => {
    el.addEventListener("mousemove", e => {
        let x = e.clientX + 30
        let y = e.clientY +30
        tooltip.style.left = x + "px"
        tooltip.style.top = y + "px"


    })
})
markers.forEach(el => {
    el.addEventListener("mouseout", e => {
        tooltip.style.left = `-9999px`
        tooltip.style.top = `-9999px`
    })
})


