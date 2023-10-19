let navigation = document.querySelector('.header__navigation');
let button = document.querySelector('.nav__expander');
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let submitButton = document.getElementById("submitButton");
let serachButton = document.getElementById("serachButton");
let serachInput = document.querySelector(".searchInput input");
let sublist = document.querySelector(".sublist");
let nav_sublist = document.querySelector(".navigation_nav-sublist");

let error_firstname = document.querySelector(".error_firstname")
let error_lastname = document.querySelector(".error_lastname")
let error_email = document.querySelector(".error_email")
let error_number = document.querySelector(".error_number")
let error_message = document.querySelector(".error_message")





let numberOfErorrs = [0, 0, 0, 0, 0]


let validateButton = () => {
    console.log(numberOfErorrs);
    for (let i = 0; i < numberOfErorrs.length; i++) {
        if (numberOfErorrs[i] == 1) {
            submitButton.disabled = true
            break
        } else {
            submitButton.disabled = false
        }
    }
}

firstname.addEventListener("change", (e) => {
    let namePattern = /^[A-Za-z ]+$/;

    if (namePattern.test(e.target.value)) {
        error_firstname.innerHTML = ""
        numberOfErorrs[0] = 0
        firstname.classList.remove('error')
        firstname.classList.add('success')
    } else {
        numberOfErorrs[0] = 1
        firstname.classList.remove('success')
        firstname.classList.add('error')
        error_firstname.innerHTML = "FirstName should only include letters"
    }
    validateButton()
})

lastname.addEventListener("change", (e) => {
    let namePattern = /^[A-Za-z ]+$/;

    if (namePattern.test(e.target.value)) {
        numberOfErorrs[1] = 0
        error_lastname.innerHTML = ""
        lastname.classList.remove('error')
        lastname.classList.add('success')
    } else {
        numberOfErorrs[1] = 1
        lastname.classList.remove('success')
        lastname.classList.add('error')
        error_lastname.innerHTML = "Last Name should only include letters"
    }
    validateButton()
})

email.addEventListener("change", (e) => {
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailPattern.test(e.target.value)) {
        numberOfErorrs[2] = 0
        error_email.innerHTML = ""
        email.classList.remove('error')
        email.classList.add('success')
    } else {
        numberOfErorrs[2] = 1
        email.classList.remove('success')
        email.classList.add('error')
        error_email.innerHTML = "This is not a valid email"
    }
    validateButton()
})

number.addEventListener("change", (e) => {
    let phoneNumberPattern = /^\+\d{12}$/;;

    if (phoneNumberPattern.test(e.target.value)) {
        numberOfErorrs[3] = 0
        error_number.innerHTML = ""
        number.classList.remove('error')
        number.classList.add('success')
    } else {
        numberOfErorrs[3] = 1
        number.classList.remove('success')
        number.classList.add('error')
        error_number.innerHTML = "This is not a valid Phone Number"
    }
    validateButton()
})

message.addEventListener("change", (e) => {
    let phoneNumberPattern =  /^[A-Za-z ]+$/;

    if (phoneNumberPattern.test(e.target.value)) {
        numberOfErorrs[4] = 0
        error_message.innerHTML = ""
        message.classList.remove('error')
        message.classList.add('success')
    } else {
        numberOfErorrs[4] = 1
        message.classList.remove('success')
        message.classList.add('error')
        error_message.innerHTML = "This is not a valid message"
    }
    validateButton()
})



