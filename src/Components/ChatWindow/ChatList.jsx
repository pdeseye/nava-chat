import Chat from "./Chat"

const ChatList = (props) => {
  return(
    <>
    {props.chats.map((chat, idx) => 
      <Chat key={idx} chat={chat}/>
    )}
    </>
  )
}

export default ChatList