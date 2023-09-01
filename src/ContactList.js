import React, { useState, useEffect } from "react";
import Contact from "./Contact";

function ContactList({ contacts, setContacts}) {
    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(data => setContacts(data.map(item =><Contact key={item.id} contact={item} />)))
    return (
        <div>
          {contacts}
        </div>
    )
  }

export default ContactList;