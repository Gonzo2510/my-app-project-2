import React, { useState, useEffect } from "react";
import Contact from "./Contact";

function Contacts() {
    let [contactList, setContactList] = useState()
    
    setContactList = (
        fetch('http://localhost:3000/contacts')
        .then(response => response.json())
        .then(contact => <Contact contact={contact} />)
    )

    return (
        <>
        {contactList}
        </>
    )
}

export default Contacts;