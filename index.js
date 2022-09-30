console.log("aksjg")
const checkOfEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const error = document.getElementById("errorMsg")
const invalidEmail = document.querySelector(".invalidEmail")
const inputEmail = document.querySelector(".inputEmail")
error.addEventListener("click", function (e) {
    e.preventDefault();
    let emailValue = inputEmail.value

    if (!checkOfEmail.test(emailValue)) {
        console.log(emailValue);
        invalidEmail.style.display = "block";
    }
    setTimeout(() => {
        invalidEmail.style.display = "none";
        inputEmail.value = ''
    }, 1500);
})