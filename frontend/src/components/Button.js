import React, {useState} from 'react'
import { 
    Button,
    Box,
    makeStyles,

} from '@material-ui/core'

export const LoginButton = (props) => {
    let useStyles = makeStyles({
        loginButton: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    
            height: '15%',
            width: '80%',
            borderRadius: 10,     
            alignItems: 'center',
            justifyContent: 'center', 
        
        },
        textButton: {
            color: '#ffffff',
        }, 
    })


    return (
        <Box display="flex" className={useStyles().loginButton}>
            <Button size="large" onClick={() => { console.log('clicado') }} className={useStyles().textButton}>
                ENTRAR
            </Button>            
        </Box>
    )   
}