import React from "react";
import ChatList from "./ChatList";

const ChatWindow = (props) => {
  return (
    <div className="chatwindow">
      <div> To: {props.contact.name}</div>
      <ChatList chats={props.contact.conversation}/>
      <form className="chatform">
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    </div>

  )
}

export default ChatWindow