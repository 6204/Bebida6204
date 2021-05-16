import React, {useState} from 'react'
import { 
    Button,
    Box,
    makeStyles,

} from '@material-ui/core'

export const LoginButton = ({action, title}) => {

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
        root: {
            display: 'flex',
            flex: 1,
            height: '100%', 
          },
    })


    return (
        <Box display="flex" onClick={action} className={useStyles().loginButton}>
            <Button
                classes={{
                root: useStyles().root, // class name, e.g. `classes-nesting-root-x`
                label: useStyles().textButton, // class name, e.g. `classes-nesting-label-x`
              }}
            >
                {title}
            </Button>        
        </Box>
    )   
}