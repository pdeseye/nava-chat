import React from "react"
import Contact from "./Contact"

const ContactList = (props) => {
  return (
    <>
      {props.contacts.sort(function(a){
        if(a.active){
          return -1
        } else {
          return 1
        }
      }).map((contact, idx) => 
        <Contact contact={contact} key={idx}/>
      )}
    </>
  )
}

export default ContactList