let loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let script = 'https://script.google.com/macros/s/AKfycbwv54HsepxFt0BNHaQrzmEaQbPy9Lajn6-4BtGHoUrkQVFWR8HdtPO2VSlzcD5TSubz0Q/exec'
    let formData = new FormData()

    formData.append("username", loginForm.username.value)
    formData.append("password", loginForm.password.value)

    fetch(script, {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            console.log("Success", result);
            alert("Data Saved Successfully!")
            loginForm.reset()
        })
        .catch(error => {
            console.log("Error", error)
            alert("Error Saving Data")
        })

})