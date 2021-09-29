import React from "react";
import styles from './MessageList.module.css'

export const MessageList =(props)=>{
    return <div>
        {
                props.list.map((message)=>
                    <div className={styles.message}>
                        <span>{message.author}</span>
                        <p className={styles.messageContainer}>{message.text}</p>
                    </div>
                )

            }
    </div>
}