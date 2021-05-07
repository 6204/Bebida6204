import React, {useState} from 'react'
import { 
    Button,
    makeStyles,

} from '@material-ui/core'

export const LoginButton = () => {
    let useStyles = makeStyles({
        loginButton: {
            display:'flex',
            color: '#ffffff',    
        } 
    })


    return (
        <Button variant="outlined" classes={useStyles.loginButton}>
            Entrar
        </Button>
    )   
}