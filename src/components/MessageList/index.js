import React from "react";
import styles from './MessageList.module.css'

export const MessageList =(props)=>{
    const messageList = props.list.map((message)=>
        <div key={message.id}>
            <p  className={message.author === 'user' ? styles.messageContainerUser : styles.messageContainerRobot }>{message.text}</p>
        </div>

    )
    return <div className={styles.messageArea}>
        {messageList}
    </div>
}