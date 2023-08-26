import React from "react"
import "./message.css"

export default function Message(props){
   
    return (<div className={`level-wrapper fromMe-${props.fromMe}`}>
        <div className={`message-box`}>
        <p className="message-text">{props.message}</p>
        </div>
    </div>)
}