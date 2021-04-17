// // Add your code here
// let formData = {
//     name: "Eva",
//     email: "eva@eva.com"
// }

// let config = {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }


function submitData(name, email) {
    return(
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: name, email: email})
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object.id
        })
        .catch(function(error) {
            alert("There was an error!")
            document.body.innerHTML += error.message
        } 
        )
    )
}