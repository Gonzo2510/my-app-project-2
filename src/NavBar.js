import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      <h1>Contacts Book</h1>
        <NavLink exact='/home' to ='/home' >Home</NavLink>
        <NavLink exact='/contactList' to ='/contactList' >Contacts</NavLink>
        <NavLink exact='/addContact' to ='/addContact' >Add Contact</NavLink>
    </div>
  );
}

export default NavBar;