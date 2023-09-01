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
  // useEffect(()=> (

  // ),[])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contactList" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
        <Route path="/addContact" element={<AddContact contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </div>
  );
}

export default App;