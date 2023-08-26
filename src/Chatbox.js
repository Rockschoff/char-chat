import React from "react"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "./features/MessagesSlice"
import Message from "./components/Message"
import { Notification } from "./agent/Notification"



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
            dispatch(addMessage({text : message , from : "Me"}))
        }
    }

    React.useEffect(()=>{
        console.log('updated the state')
        Notification(messages)
    }, [messages])
    return <div className="chatbox">
        <div className = "chat-history">
            
            {messages.map((message , key)=>{
                return <Message key={key} message={message.text} fromMe={(message.from=="Me")}/>
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