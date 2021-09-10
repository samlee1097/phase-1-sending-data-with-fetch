function submitData(nameData, emailData){
    return fetch("http://localhost:3000/users", {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: nameData,
            email: emailData
        })
    })
    .then(resp => resp.json())
    .then(function(data){
        const idHeader = document.createElement("h1");
        idHeader.innerText = `Hello ${data.name}, this is your ID: ${data.id}`;
        document.getElementById("body").append(idHeader);
    })
    .catch(function(error){
        const errorHeader = document.createElement("h1");
        errorHeader.innerText = `Check your console to see the error message :(`;
        document.getElementById("body").append(errorHeader);
        console.log(error.message);
    })
};