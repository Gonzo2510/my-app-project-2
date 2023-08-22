import React from "react";

function Contact({ contact }) {
    const { name, address, phoneNumber} = contact

    return (
        <li>
            {name}
            {address}
            {phoneNumber}
        </li>
    )
}

export default Contact;