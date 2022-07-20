import React, { useEffect, useState } from "react"
import Chat from "./Chat"

const ChatList = (props) => {
  const [chats, setChats] = useState([])
  console.log(props.chats)
  useEffect(() => {
    setChats(props.chats)
  }, [props.chats, chats])


  return(
    <div className="chatlist">
    {chats.map((chat, idx) => 
      <Chat key={idx} chat={chat}/>
    )}
    </div>
  )
}

export default ChatList