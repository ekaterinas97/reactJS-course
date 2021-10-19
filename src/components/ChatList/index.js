import React from 'react';
import {List, ListItem, Divider, Typography, ListItemAvatar, Avatar} from '@mui/material';


export const ChatList=(props)=>{
    const chatList = props.list.map((chatItem)=> <ListItem divider={true}  key={chatItem.id}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={chatItem.avatar} />
            </ListItemAvatar>
        <p>{chatItem.name}</p>
        <p>Message</p>
    </ListItem>
    )
    return (
        <List>
            <Typography variant="h6">Список чатов</Typography>
            {chatList}
        </List>
    )
}