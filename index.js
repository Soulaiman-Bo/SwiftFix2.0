let cardWraper = document.querySelector('.section__testimonial-cards');
let cards = document.querySelectorAll('.testimonial__card');
let dot = document.querySelectorAll('.dot');



let scrolling = 0
let scrollCount = 0

let scrollInterval = setInterval(scroll, 3000)

function scroll() {

    dot[scrollCount].classList.remove("active")

    scrollCount += 1;

    if (scrollCount == 4) {
        clearInterval(scrollInterval);
        scrollCount = 0
        scrollInterval = setInterval(scroll, 3000)
    }
    scrolling = scrollCount * 636;
    dot[scrollCount].classList.add("active")

    cardWraper.style.transform = `translateX(${-scrolling}px)`

}