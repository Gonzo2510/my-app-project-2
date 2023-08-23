import React from "react";

function Contact({ contact }) {
    const { name, address, phoneNumber} = contact

    console.log(name, address, phoneNumber)

    return (

        <div>
            {name}
            {address}
            {phoneNumber}
        </div>
    )
}

export default Contact;