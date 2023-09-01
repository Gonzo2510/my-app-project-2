import React from "react";

function AddContact() {
    function handleSubmit(e) {
        e.preventDefault()
        const name = e.target[0].value
        const title = e.target[1].value
        const address = e.target[2].value
        const phoneNumber = e.target[3].value
        
        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            body: JSON.stringify({
                name : name,
                title : title,
                address : address,
                phoneNumber : phoneNumber 
                })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for ='name'>Name: </label>
            <input type='text' id='name' name='name '></input>
            <br />
            <label for ='name'>Title: </label>
            <input type='text' id='Title' name='Title '></input>  
            <br />
            <label for ='name'>Address: </label>
            <input type='text' id='Address' name='Address'></input>
            <br />
            <label for ='name'>Phone Number: </label>
            <input type='text' id='PhoneNumber' name='PhoneNumber '></input> 
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddContact;