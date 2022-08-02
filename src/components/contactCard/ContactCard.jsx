import React from "react";
import './style.scss'

function ContactCard({contact}){
    return (
        <>
             <div className="contact__cards">
                <p className="contact__card">{contact.name}</p>
                <p className="contact__card">{contact.username}</p>
                <p className="contact__card">{contact.email.substring(0,16)}...</p>
                <p className="contact__card">{contact.address.street}</p>
                <p className="contact__card">{contact.address.city}</p>
                <p className="contact__card">{contact.address.zipcode}</p>
            </div>
            <div className="contact__cards_mini">
            <div className="contact__categories_mini">
                <p className="contact__category">name</p>
                <p className="contact__category">username</p>
                <p className="contact__category">email</p>
                <p className="contact__category">street</p>
                <p className="contact__category">city</p>
                <p className="contact__category">zipcode</p>
            </div>
            <div className="contact__card_mini">
                <p className="contact__card">{contact.name}</p>
                <p className="contact__card">{contact.username}</p>
                <p className="contact__card">{contact.email.substring(0,16)}...</p>
                <p className="contact__card">{contact.address.street}</p>
                <p className="contact__card">{contact.address.city}</p>
                <p className="contact__card">{contact.address.zipcode}</p>
            </div>
            </div>
        </>
    )
}
export default ContactCard