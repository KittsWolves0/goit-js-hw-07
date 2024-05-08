const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerSub);

function handlerSub (event) {
    event.preventDefault();
    const userEmail = event.target.elements.email.value;
    const userPassword = event.target.elements.password.value;
    if (userEmail === "" || userPassword === "") {
    alert('All form fields must be filled in');
    }
    const info = {
        email: userEmail.trim(),
        password: userPassword.trim()
    }

    console.log(info);
    event.currentTarget.reset();
}

