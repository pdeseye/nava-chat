import React from "react";

const Contact = (props) => {
  return (
    <>
     <h6> 
      {props.contact.name}  <br/>
      {props.contact.active ? "Active" : "Not Active"}
    </h6>
    </>
  )
}

export default Contact