import React, { useState } from "react"
import ChatWindow from "../../Components/ChatWindow/ChatWindow"
import ContactList from "../../Components/Contacts/ContactList"

const DashboardPage = () => {
  const contacts = [
    {
      name: "Jane Doe",
      telephoneNumber: 4845992239,
      active: true,
      conversation: [
      //   {sender: "user",
      //   text: "heyyy",
      //   time: "12:00",
      // },
      // {
      //   sender:"Jane",
      //   text: "hello",
      //   time: "12:05"
      // }
    ]
  },
  {
    name: "John Doe",
    telephoneNumber: 4845992237,
    active: false,
    conversation: [
      {sender: "user",
      text: "heyyy",
      time: "12:00",
    },
    {
      sender:"John",
      text: "hello",
      time: "12:05"
    }
  ]
},
// {
//   name: "Georgia Miller",
//   telephoneNumber: 6100237465,
//   active: false,
//   conversation: [
//     {sender: "user",
//     text: "heyyy",
//     time: "12:00",
//   },
//   {
//     sender:"Georgia",
//     text: "hello",
//     time: "12:05"
//   }
// ]
// },
// {
//   name: "Michael Jackson",
//   telephoneNumber: 6102513497,
//   active: false,
//   conversation: [
//     {sender: "user",
//     text: "heyyy",
//     time: "12:00",
//   },
//   {
//     sender:"Michael",
//     text: "hello",
//     time: "12:05"
//   }
// ]
// },
// {
//   name: "Barack Obama",
//   telephoneNumber: 1800237657,
//   active: true,
//   conversation: [
//     {sender: "user",
//     text: "heyyy",
//     time: "12:00",
//   },
//   {
//     sender:"Barack",
//     text: "hello",
//     time: "12:05"
//   }
// ]
// },
]
const hasConversation = contacts.find(contact => contact.conversation.length > 0) ;

const [contact, setContact] = useState(hasConversation ? hasConversation : null )


return(
  <>
      <ContactList contacts={contacts} setContact={setContact}/>
      <ChatWindow contact={contact}/>
    </>
  )
}

export default DashboardPage