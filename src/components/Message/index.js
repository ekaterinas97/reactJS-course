import React from 'react';
import styles from "./Message.module.css";

export const Message=(props)=>{
    return <div className={styles.message}>
        <p className={styles.messageText}>{props.textMessage}</p>
    </div>
}