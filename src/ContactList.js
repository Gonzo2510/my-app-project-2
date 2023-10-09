import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, setContacts }) {


  const deleteContact = (contact) => {
    fetch(`http://localhost:3000/contacts/${contact.id}`, {
      method: 'DELETE'
    })
<<<<<<< HEAD
    .then(() => {setContacts(contacts.filter(itemContact => itemContact.id !== contact.id ))})
    
=======
    .then(() => {setContacts(contacts.filter(itContact => itContact.id !== contact.id ))})
>>>>>>> 2bba01afb16b786a37c20c3f6bcb98ed929baddd
  }

  const displayContacts = contacts.map(contact => <Contact key={contact.id} contact={contact} handleDelete={deleteContact} />)


return (
        <div className="contacts container">
          {displayContacts}
        </div>
    )
  }

export default ContactList;
