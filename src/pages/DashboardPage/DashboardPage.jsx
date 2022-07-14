import React from "react"
import ChatWindow from "../../Components/ChatWindow/ChatWindow"
import ContactList from "../../Components/Contacts/ContactList"

const DashboardPage = () => {

  const contacts = [
    {
      name: "Jane Doe",
      telephoneNumber: 4845992239,
      active: true
    },
    {
      name: "John Doe",
      telephoneNumber: 4845992237,
      active: false
    },
    {
      name: "Georgia Miller",
      telephoneNumber: 6100237465,
      active: false
    },
    {
      name: "Michael Jackson",
      telephoneNumber: 6102513497,
      active: false
    },
    {
      name: "Barack Obama",
      telephoneNumber: 1800237657,
      active: true
    },
  ]

  return(
    <>
      <ContactList contacts={contacts}/>
      <ChatWindow/>
    </>
  )
}

export default DashboardPage