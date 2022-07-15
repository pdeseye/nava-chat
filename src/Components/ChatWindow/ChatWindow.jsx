import React from "react";
import ChatList from "./ChatList";

const ChatWindow = (props) => {
  return (
    <>
    <div> To: {props.contact.name}</div>
    <ChatList chats={props.contact.conversation}/>
    <form>
      <input type="text" />
      <button type="submit">Send</button>
    </form>
    
    </>

  )
}

export default ChatWindow