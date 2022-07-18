import Chat from "./Chat"

const ChatList = (props) => {
  return(
    <div className="chatlist">
    {props.chats.map((chat, idx) => 
      <Chat key={idx} chat={chat}/>
    )}
    </div>
  )
}

export default ChatList