// Add your code here

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then((response) => response.json())
    .then((json) => appendID(json))
    .catch((err) => displayError(err))
}

function appendID(json) {
    const body = document.querySelector('body')
    const text = document.createTextNode(json.id)
    body.appendChild(text)
}

function displayError(err) {
    const body = document.querySelector('body')
    const text = document.createTextNode(err.message)
    body.appendChild(text)
}