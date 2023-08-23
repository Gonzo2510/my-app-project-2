import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Home from "./Home";
import AddContact from "./AddContact";
import "./index.css"

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