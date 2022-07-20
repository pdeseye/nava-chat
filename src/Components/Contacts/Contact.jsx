import React from "react";

const Contact = (props) => {
  return (
    <div className="contacts" onClick={() => props.handleClick(props.contact)}>
     <h6 className="contact-info"> 
      {props.contact.name}  <br/>
      {props.contact.active ? "Active" : "Not Active"}
    </h6>
    </div>
  )
}

export default Contact