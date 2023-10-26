let faq__head = document.querySelectorAll(".faq__head")
let faq__body = document.querySelectorAll(".faq__body")





for (let i = 0; i < faq__head.length; i++) {
    faq__head[i].addEventListener("click", (e) => {
        faq__body[i].classList.toggle('body__colapsed');
        faq__head[i].classList.toggle('flipped');
    })
}