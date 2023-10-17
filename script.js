let navigation = document.querySelector('.header__navigation');
let button = document.querySelector('.nav__expander');


let toggle = () => {
    navigation.classList.toggle('collapsed')
}


button.addEventListener('click', toggle);
