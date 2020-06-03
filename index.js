// Add your code here





function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    }
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", config)
        .then(res => res.json())
        .then(json => {
            document.body.innerHTML = json.id;
        })
        .catch(err => {
            document.body.innerHTML = err.message;
        });
}

// submitData('marshall', 'marshall@gmail.com');