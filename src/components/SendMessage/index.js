import React, { useRef } from 'react';
import styles from './SendMessage.module.css'


export const SendMessage = (props)=>{

    const textInput = useRef(null);

    const createMsg= (e)=>{
        e.preventDefault();
        const newMsg = Object.assign({author: 'user'}, {text:`${textInput.current.value}`});
        if(props.onSubmit){
            props.onSubmit(newMsg);
        }
        textInput.current.value='';

    }
    return <section className={styles.sendMessage} >
        <div className={styles.container}>
            <form className={styles.sendMessageForm} onSubmit={createMsg}>
                <input className={styles.sendMessageInput} ref={textInput}  type="text"/>
                <button type={"submit"}>Отправить</button>
            </form>
        </div>

    </section>
}