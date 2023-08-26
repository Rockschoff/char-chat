import React from "react"
import "./styles.css"
import Chatbox from "./Chatbox"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function App() {
  const messages = useSelector(state => state.messages.messages)

  return (
   
    <div className="App">
      <h1>Hello World</h1>
      <Chatbox />
      {/* <p>{messages}</p> */}

    </div>
    
  );
}

export default App;
