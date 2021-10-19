import React, {useEffect, useRef} from 'react';
import styles from './SendMessage.module.css'
import {Input, Button, Box} from '@mui/material'
import SendIcon from "@mui/icons-material/Send";
import {nanoid} from "nanoid";


export const SendMessage = (props)=>{

    const textInput = useRef(null);

    useEffect(()=>{
        textInput.current?.focus();
    },[]);

    const createMsg= (e)=>{
        e.preventDefault();
        const msg ={
            id: nanoid(),
            author: 'user',
        };
        const newMsg = Object.assign(msg, {text:`${textInput.current.value}`});
        if(props.onSubmit){
            props.onSubmit(newMsg);
        }
        textInput.current.value='';
        textInput.current?.focus();

    }
    return <section>
        <div>
            <form className={styles.sendMessageForm} onSubmit={createMsg}>
                    <Input className={styles.sendMessageInput} fullWidth={true} multiline={true} inputRef={textInput} placeholder={`Write a message...`} />
                    <Button  endIcon={<SendIcon/>}  type={"submit"} />

            </form>
        </div>

    </section>
}