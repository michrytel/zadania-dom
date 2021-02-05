{
    let links = document.querySelectorAll(".tab-el");
    let contents = document.querySelectorAll(".tab-content");

    for (const link of links) {
        link.addEventListener("click", e => {
            let a = link.querySelector(".tab-link");
            for (const link of links) {
                link.classList.remove("tab-el-active")
            }
            contents.forEach(el =>{
                el.classList.remove("tab-content-active")
                const contentid = "#" + el.id
                const contentlink = a.getAttribute("href")
                if(contentid === contentlink) {
                    el.classList.add("tab-content-active")
                }
            })
            link.classList.add("tab-el-active")
        })
    }
}
