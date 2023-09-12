import React, { useState } from "react";
import Contact from "./Contact";

// function deleteContact(contactToDelete){
//     const contactId = contactToDelete.id
//     console.log(contactId)

//     // fetch('http://localhost:3000/contacts', {method: 'DELETE'})
//     // .then(response => response.json())
//     // .then(newContact => setContacts(oldContacts => [...oldContacts, <Contact key={newContact.id} contact={newContact} />]))
// }

function AddContact({ contacts, setContacts }) {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
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
        .then(newContact => setContacts(oldContacts => [...oldContacts, <Contact key={newContact.id} contact={newContact} />]))
        .then(setName(''), setTitle(''), setAddress(''), setPhoneNumber(''))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor ='name'>Name: </label>
            <input 
                type='text' 
                id='name' 
                name='name '
                value ={name}
                onChange={e => setName(e.target.value)} 
            />
            <br />
            <label htmlFor ='name'>Title: </label>
            <input 
                type='text' 
                id='Title' 
                name='Title '
                value ={title}
                onChange={e => setTitle(e.target.value)} 
            />  
            <br />
            <label htmlFor ='name'>Address: </label>
            <input 
                type='text' 
                id='Address' 
                name='Address '
                value ={address}
                onChange={e => setAddress(e.target.value)} 
            /> 
            <br />
            <label htmlFor ='name'>Phone Number: </label>
            <input 
                type='text' 
                id='PhoneNumber' 
                name='PhoneNumber '
                value ={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} 
            /> 
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddContact;