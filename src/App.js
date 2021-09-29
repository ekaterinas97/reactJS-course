import styles from './App.module.css';
import React, {useEffect, useState} from "react";
import {MessageList} from "./components/MessageList";
import {SendMessage} from "./components/SendMessage";



function App() {
    const [messageList, setMessageList]=useState([]);

    useEffect(()=>{
        setMessageList(messageList);
        console.log('Update MessageList')
    }, []);


  return (
      <div>
        <MessageList list={messageList}/>
        <SendMessage list={messageList}/>
      </div>

  );
}

export default App;
