import React from "react"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "./features/MessagesSlice"
export default function Chatbox(props){
    const messages = useSelector(state=>state.messages.messages)
    const dispatch = useDispatch()
    function HandleSubmit(event){
        event.preventDefault()
        var input_box = document.getElementById("input-text")
        var message = input_box.value
        event.target.reset()
        if(message != ""){
            // console.log(message)
            dispatch(addMessage(message))
        }


    }
    return <div className="chatbox">
        <div className = "chat-history">
            
            {messages.map((message , key)=>{
                return <p key={key}>{message}</p>
            })}
            
        </div>
        <div className="chat-input">
            <form className="chat-input-form" onSubmit={HandleSubmit}>
                <input type="text" id="input-text" placeholder="Start Typing ..."></input>
                <input type="submit"></input>
            </form>
        </div>
    </div>
}