const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const dataObject = {};

    formData.forEach((value, name) => {
        dataObject[name] = value;
    })
    
    if (validateForm(dataObject)) {
        console.log(dataObject);
        form.reset();
    } else {
        alert("Please fill in all the fields!");
    }
}

function validateForm(data) {
    for (const key in data) {
        if (data[key] === '') {
            return false;
        }
    }
    return true;
}