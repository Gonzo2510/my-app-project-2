import React, { useState, useEffect } from "react";
import Contact from "./Contact";



function ContactList({ contacts }) {
return (
        <div className="contacts container">
          {contacts}
        </div>
    )
  }

export default ContactList;