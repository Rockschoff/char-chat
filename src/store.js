import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./features/MessagesSlice"

const store = configureStore({
    reducer:{
      messages : messagesReducer
    }
  })

export default store