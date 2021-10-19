import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";


export const Header = ()=>{

    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit" sx={{flexGrow: 1}}  noWrap>
                Messenger
            </Typography>
            <Button variant={"outlined"}>Login</Button>
        </Toolbar>
    </AppBar>
}