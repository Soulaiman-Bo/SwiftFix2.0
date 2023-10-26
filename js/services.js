let modal__opener = document.querySelectorAll(".modal__opener");
let modal__closer = document.querySelectorAll(".modal__closer");

let modal = document.querySelectorAll(".dialog-1");



for (let i = 0; i < modal.length; i++) {
    modal__opener[i].addEventListener("click", (e) => {
        modal[i].showModal();
    })
    modal__closer[i].addEventListener("click", (e) => {
        modal[i].close();
    })

}
