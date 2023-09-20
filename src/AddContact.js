import React, { useState } from "react";
import Contact from "./Contact";

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
        .then(newContact => setContacts([...contacts, newContact]))
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
                placeholder="John Doe"
                onChange={e => setName(e.target.value)} 
            />
            <br />
            <label htmlFor ='name'>Title: </label>
            <input 
                type='text' 
                id='Title' 
                name='Title '
                value ={title}
                placeholder="Programmer"
                onChange={e => setTitle(e.target.value)} 
            />  
            <br />
            <label htmlFor ='name'>Address: </label>
            <input 
                type='text' 
                id='Address' 
                name='Address '
                value ={address}
                placeholder="1234 Richmond Ave."
                onChange={e => setAddress(e.target.value)} 
            /> 
            <br />
            <label htmlFor ='name'>Phone Number: </label>
            <input 
                type='text' 
                id='PhoneNumber' 
                name='PhoneNumber '
                value ={phoneNumber}
                placeholder="(123) 456-7890"
                onChange={e => setPhoneNumber(e.target.value)} 
            /> 
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddContact;