import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Home from "./Home";
import AddContact from "./AddContact";


function App() {
  const [contacts, setContacts] = useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Routes>
        <Route path="/addContact" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;