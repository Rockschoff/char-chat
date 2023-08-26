import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name : "messages",
    initialState : {
        messages : ["This is first message" , "This is the second message"]
    },
    reducers : {
        addMessage : (state , action)=>{
            return {
                ...state,
                messages : [...state.messages , action.payload]
            }
        }
    }
})

export const {addMessage} = messagesSlice.actions

export default messagesSlice.reducer