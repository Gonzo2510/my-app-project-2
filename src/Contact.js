import React from "react";

function Contact({ contact }) {
    const { name, address, phoneNumber, id} = contact
    return (
        <div key ={id}>
          <p>{name}</p>
          {address}
          {phoneNumber}
        </div>
    )
}

export default Contact;