import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
//import Contacts from "./Contacts";
import Home from "./Home";
import AddContact from "./AddContact";
import "./index.css"

function Contact({ contact }) {
  const { name, address, phoneNumber} = contact

  console.log(name, address, phoneNumber)

  return (

      <div>
          {name}
          {address}
          {phoneNumber}
      </div>
  )
}


function Contacts({ contacts, setContacts}) {
  let [contactList, setContactList] = useState([])
  
      fetch('http://localhost:3000/contacts')
      .then(response => response.json())
      .then(contacts => console.log(contacts))
      .then(contacts => setContacts= (contacts.forEach(contact => <Contact contact={contact} />)))
      //.then(console.log(contactList))

  return (
      <>
      {contacts}
      </>
  )
}


function App() {
  const [contacts, setContacts] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts contacts={contacts} setContacts={setContacts} />} />
        <Route path="/addContact" element={<AddContact contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </div>
  );
}

export default App;