import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCount((count) => count + input.length)
    setInput('')
  }

  return (
    <div className="navbar">

    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>Click Me!</button>
    </form>
    <p>{count}</p>



      <h1>Contacts Book</h1>
        <NavLink exact='/home' to ='/home' >Home</NavLink>
        <NavLink exact='/contactList' to ='/contactList' >Contacts</NavLink>
        <NavLink exact='/addContact' to ='/addContact' >Add Contact</NavLink>
    </div>
  );
}

export default NavBar;