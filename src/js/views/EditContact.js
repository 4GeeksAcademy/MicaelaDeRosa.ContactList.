import React from 'react'
import { useParams } from "react-router-dom";

const EditContact = () => {
    const params = useParams()
    console.log(params);
  return (

    <div className="container border border-danger">
        <h1>Edit Contact</h1>
        <p>Information of contact with Id: {params.contactId}</p>
    </div>
  )
}

export default EditContact;