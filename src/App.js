import styles from './App.module.css';
import React, {useEffect, useState} from "react";
import {MessageList} from "./components/MessageList";
import {SendMessage} from "./components/SendMessage";



function App() {
    const [messageList, setMessageList]=useState([]);

    const addMessage =(msg)=>{
        const newMessageList = [...messageList];
        newMessageList.push(msg);
        setMessageList(newMessageList);
    }

    useEffect(()=>{
        if(messageList.length){
            const lastMsg=messageList[messageList.length - 1 ];
            if(lastMsg.author === 'user'){
                const botMsg ={author: "bot", text: 'Robot text'};
                setTimeout(()=>{
                    addMessage(botMsg);
                },2000);
            }
        }
    }, [messageList]);


  return (

      <div>
          <h1 className={styles.appHeading}>Homework-2</h1>
        <MessageList list={messageList}/>

          <SendMessage onSubmit={(value)=>{
              addMessage(value);
          }
          }/>

      </div>

  );
}

export default App;
