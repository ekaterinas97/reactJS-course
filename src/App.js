import styles from './App.module.css';
import React, {useEffect, useState} from "react";
import {MessageList} from "./components/MessageList";
import {SendMessage} from "./components/SendMessage";
import {Layout} from "./components/Layout";
import {nanoid} from "nanoid";
import {Container, Grid} from "@mui/material";
import {ChatList} from "./components/ChatList";

const chatList = [
    {
        id: nanoid(5),
        avatar: 'https://mui.com/static/images/avatar/3.jpg',
        name: 'Name 1',
    },
    {
        id: nanoid(5),
        avatar: 'https://mui.com/static/images/avatar/3.jpg',
        name: 'Name 2',
    },
    {
        id: nanoid(5),
        avatar: 'https://mui.com/static/images/avatar/3.jpg',
        name: 'Name 3',
    },
    {
        id: nanoid(5),
        avatar: 'https://mui.com/static/images/avatar/3.jpg',
        name: 'Name 4',
    },


]


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
                const botMsg ={id: nanoid(),author: "bot", text: 'Robot text'};
                setTimeout(()=>{
                    addMessage(botMsg);
                },2000);
            }
        }
    }, [messageList]);


  return (
      <div>
          <Layout />
          <Container>
              <Grid container spacing={2}>
                  <Grid item xs={4}>
                      <ChatList list={chatList}/>
                  </Grid>
                  <Grid item xs={8}>
                      <MessageList list={messageList}/>

                      <SendMessage onSubmit={(value)=>{
                          addMessage(value);
                      }
                      }/>
                  </Grid>
              </Grid>
          </Container>

      </div>

  );
}

export default App;
