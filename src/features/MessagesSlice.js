import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name : "messages",
    initialState : {
        messages : [{text : "This is first message" , from : "bot"}]
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