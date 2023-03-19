const firstLi = document.querySelectorAll(".footer__list > ul > li:first-child");
function dropList() {
    firstLi.forEach(el => {
        el.addEventListener("click", event => {
            el.classList.toggle("active");
            el.parentElement.classList.toggle("active");
        })
    })
}

export { dropList }