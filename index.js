let cardWraper = document.querySelector('.section__testimonial-cards');
let cards = document.querySelectorAll('.testimonial__card');
let dot = document.querySelectorAll('.dot');

cardWraper.addEventListener

let scrolling = 0
let scrollCount = 0

let scrollInterval = setInterval(scrollingInterval, 3000)

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
        // for (let j = 0; j < dot.length; j++) {
        //     dot[j].classList.remove("active")
        // }
        dot[scrollCount].classList.remove("active")
        scrollCount = i
        scrollingFn()
    })
}


function scrollingInterval() {
    dot[scrollCount].classList.remove("active")
    scrollCount += 1
    if (scrollCount == 4) {
        clearInterval(scrollInterval);
        scrollCount = 0
        scrollInterval = setInterval(scrollingInterval, 3000)
    }

    scrollingFn()
}


function scrollingFn() {
    dot[scrollCount].classList.add("active")
    let scroll_points = [0, 638, 1272, 1908]
    cardWraper.style.transform = `translateX(${-scroll_points[scrollCount]}px)`;
}





