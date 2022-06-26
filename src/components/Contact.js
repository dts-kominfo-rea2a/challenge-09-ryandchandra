// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

import "./Contact.css";

const Contact = ({ data }) => {
    return (
        <div className="contacts-container">
            {data.map((contact) => <div className="contact-card" key={contact.name}>
                <img src={contact.photo} alt="" />
                <div className="contact-card-content">
                    <h3>{contact.name}</h3>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </div>)}
        </div>
    )
}

export default Contact;