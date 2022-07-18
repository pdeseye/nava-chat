const Chat =(props) => {
  const name = props.chat.sender === "user" ? "userchat" : "otherchat"
  return(
    <div className={name}>
      {props.chat.text}
    </div>
  )
}
export default Chat