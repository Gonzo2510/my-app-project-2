import React from "react";

function Contact({ contact, handleDelete }) {
  function handleClick() {
    handleDelete(contact)
  }

  const { name, address, phoneNumber, id} = contact
  return (
      <div key ={id} className="card">
        <h4>{name}</h4>
        Address: {address}
        <br />
        Phone: {phoneNumber}
        <br/>
        <button className="delete" onClick={handleClick}>Delete</button>
      </div>
  )
}

export default Contact;