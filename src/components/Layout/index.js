import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import {Header} from "../Header";

const theme = createTheme();

export const Layout = ({children}) =>{

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

    </ThemeProvider>
}