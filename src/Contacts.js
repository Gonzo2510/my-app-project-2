import React, { useState, useEffect } from "react";
import Contact from "./Contact";

function Contacts({ contacts, setContacts}) {
    let [contactList, setContactList] = useState([])
    
        fetch('http://localhost:3000/contacts')
        .then(response => response.json())
        .then(contacts => setContacts= (contacts.map(contact => <Contact contact={contact} />)))
        //.then(console.log(contactList))

    return (
        <>
        {contacts}
        </>
    )
}

export default Contacts;