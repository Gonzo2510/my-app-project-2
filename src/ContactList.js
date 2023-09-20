import React from "react";

function ContactList({ displayContacts }) {


return (
        <div className="contacts container">
          {displayContacts}
        </div>
    )
  }

export default ContactList;