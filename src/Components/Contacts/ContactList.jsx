import {React, useState} from "react"
import Contact from "./Contact"

const ContactList = (props) => {
  const [inputText, setInputText] = useState("")

  let inputHandler = (e) => {
    const search = e.target.value
    setInputText(search)
  }

  const filteredContacts = props.contacts.filter(contact => {
    if (inputText === '') {
        return contact;
    } else {
        return contact.name.includes(inputText)
    }
})

  return (
    <>
      <input onChange={inputHandler}/>

      {filteredContacts.sort(function(a){
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