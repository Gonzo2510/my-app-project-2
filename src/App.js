import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Contact from "./Contact";
import ContactList from "./ContactList";
import Home from "./Home";
import AddContact from "./AddContact";
import "./index.css"


function App() {
  let [contacts, setContacts] = useState([])
  let displayContacts = []
  const api = 'http://localhost:3000/contacts'

  useEffect(() => {
      fetch(api)
      .then(response => response.json())
      .then(contactsData => setContacts(contactsData))
  },[AddContact])
  
  const deleteContact = (contact) => {
    fetch(api+"/"+contact.id, {
      method: 'DELETE'
    })
    .then(setContacts(contacts.filter(itContact => itContact.id !== contact.id )))
  }

  displayContacts = contacts.map(contact => <Contact key={contact.id} contact={contact} handleDelete={deleteContact} />)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contactList" element={<ContactList displayContacts={displayContacts} />} />
        <Route path="/addContact" element={<AddContact contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </div>
  );
}

export default App;