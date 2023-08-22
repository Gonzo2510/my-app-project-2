import React from "react";

function AddContact() {
    return (
        <form>
            <label for ='name'>Name:</label>
            <input type='text' id='name' name='name '></input>
            <br />
            <label for ='name'>Address:</label>
            <input type='text' id='Address' name='Address'></input> 
            <br />
            <label for ='name'>Phone Number:</label>
            <input type='text' id='PhoneNumber' name='PhoneNumber '></input> 
        </form>
    )
}

export default AddContact;