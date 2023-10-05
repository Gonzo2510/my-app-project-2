import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, setContacts }) {


  const deleteContact = (contact) => {
    fetch(`http://localhost:3000/contacts/${contact.id}`, {
      method: 'DELETE'
    })
    .then(() => {setContacts(contacts.filter(itemContact => itemContact.id !== contact.id ))})
    
  }

  const displayContacts = contacts.map(contact => <Contact key={contact.id} contact={contact} handleDelete={deleteContact} />)


return (
        <div className="contacts container">
          {displayContacts}
        </div>
    )
  }

export default ContactList;