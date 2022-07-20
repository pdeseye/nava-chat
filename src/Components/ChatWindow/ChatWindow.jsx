import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";

const ChatWindow = (props) => {
  const [convo, setConvo] = useState([])
  const [formData, setFormData] = useState({})

  useEffect (() => {
    setConvo(props.contact.conversation)
  }, [props.contact])


  const handleChange = (e) => {
    const newConvo = {
      sender: "user",
      text: e.target.value,
      time: "12:30",
    }
    setFormData( newConvo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log( formData)
    const tempconvo = [...convo, formData]
    setConvo(tempconvo)
    console.log(typeof tempconvo)
  }

  return (
    <div className="chatwindow">
      <div> To: {props.contact.name}</div>
      <ChatList chats={convo}/>
      <form className="chatform" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button type="submit">Send</button>
      </form>
    </div>

  )
}

export default ChatWindow