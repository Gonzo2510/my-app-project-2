import React from "react";
import Contact from "./Contact";

function deleteContact(contactToDelete){
    const contactId = contactToDelete.id
    console.log(contactId)

    // fetch('http://localhost:3000/contacts', {method: 'DELETE'})
    // .then(response => response.json())
    // .then(newContact => setContacts(oldContacts => [...oldContacts, <Contact key={newContact.id} contact={newContact} />]))
}

function AddContact({ contacts, setContacts }) {
    function handleSubmit(e) {
        e.preventDefault()
        const name = e.target[0].value
        const title = e.target[1].value
        const address = e.target[2].value
        const phoneNumber = e.target[3].value
        
        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                "Accept" : 'application/json',
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                name : name,
                title : title,
                address : address,
                phoneNumber : phoneNumber,
                })
        })
        .then(response => response.json())
        .then(newContact => setContacts(oldContacts => [...oldContacts, <Contact key={newContact.id} contact={newContact} handleDelete={deleteContact()} />]))
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