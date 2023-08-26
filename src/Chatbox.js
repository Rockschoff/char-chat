import React from "react"
import "./styles.css"

export default function Chatbox(props){
    return <div className="chatbox">
        <div className = "chat-history"></div>
        <div className="chat-input">
            <form className="chat-input-form">
                <input type="text">

                </input>
                <input type="submit"></input>
            </form>
        </div>
    </div>
}