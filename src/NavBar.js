import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
        <NavLink exact to ='/home' >
            Home
        </NavLink>
        <NavLink exact to ='/contacts' >
            Contacts
        </NavLink>
        <NavLink exact to ='/addContact' >
            Add Contact
        </NavLink>
    </div>
  );
}

export default NavBar;