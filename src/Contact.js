import React from "react";

function Contact({ contact, handleDelete }) {
  const { name, address, phoneNumber, id} = contact
  
  const handleClick = () => {
    handleDelete(contact)
  }

  return (
      <div key={id} className="card">
        <h4>{name}</h4>
        <button className="delete" onClick={handleClick}>Delete</button>
        Address: {address}
        <br />
        Phone: {phoneNumber}
      </div>
  )
}

export default Contact;