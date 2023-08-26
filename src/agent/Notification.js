import React from "react"
import  store  from "../store"
import {addMessage} from "../features/MessagesSlice"
import  customAgents  from "./Agent"

export function Notification(){
    console.log("Sending the notification")
    var messages = store.getState().messages.messages
    console.log(messages[messages.length -1])
    console.log(messages)

    customAgents.map((agent)=>{
        agent.readAndRespond(store , addMessage)
    })
    

    
    // agent.repsond to notification
    // agent decided on how to resposdt to notification and updates the message store in redux
    
    return 
}