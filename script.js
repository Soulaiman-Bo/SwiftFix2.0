let navigation = document.querySelector('.header__navigation');
let button = document.querySelector('.nav__expander');
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let submitButton = document.getElementById("submitButton");
let serachButton = document.getElementById("serachButton");
let serachInput = document.querySelector(".searchInput");
let sublist__head  = document.querySelector(".sublist__head ");
let sublist = document.querySelector(".sublist");

let nav_sublist = document.querySelector(".navigation_nav-sublist");


sublist__head 

let toggle = () => {
    navigation.classList.toggle('collapsed')
}
button.addEventListener('click', toggle);

let togglesearch = () => {
    serachInput.classList.toggle('shown')
}
serachButton.addEventListener('click', togglesearch);

let toggleDropdpwn = () => {
    nav_sublist.classList.toggle("hide")
    sublist__head.classList.toggle("hide")
}
sublist.addEventListener('click', toggleDropdpwn);















