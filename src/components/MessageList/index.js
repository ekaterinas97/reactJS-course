import React from "react";
import styles from './MessageList.module.css'

export const MessageList =(props)=>{

    return <div className={styles.messageArea}>
        {
                props.list.map((message)=>{

                       return <div className={styles.message}>
                            <p className={message.author === 'user' ? styles.messageContainerUser : styles.messageContainerRobot }>{message.text}</p>
                        </div>
                })

            }
    </div>
}