import React from 'react'
import { 
    Button,
    makeStyles,
} from '@material-ui/core'
import {ExitToApp, Add} from '@material-ui/icons'

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
    })


    return (
            <Button
                type="submit"
                classes={{
                root: useStyles().loginButton, // class name, e.g. `classes-nesting-root-x`
                label: useStyles().textButton, // class name, e.g. `classes-nesting-label-x`
              }}
            >
                {title}
            </Button>   
    )   
}

export const AddButton = ({onClick}) => {

    let useStyles = makeStyles({
        loginButton: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            height: '50px',  
            width: '100px',   
            alignItems: 'center',
            justifyContent: 'center', 
        
        },
        textButton: {
            color: '#ffffff',
        },
    })


    return (
            <Button
                onClick={onClick}
                classes={{
                root: useStyles().loginButton, // class name, e.g. `classes-nesting-root-x`
                label: useStyles().textButton, // class name, e.g. `classes-nesting-label-x`
              }}
            >
                <Add/>
            </Button>   
    )   
}

export const LinkButton = ({onClick}) => {

    const useStyles = makeStyles({
        linkButton: {
          color: '#f7bb28', 
          borderColor: '#f7bb28',
          height: '50px',
        },
        textButton: {
            color: '#f7bb28',
        },
    }) 

    const classes = useStyles()    

    return(
        <Button
        onClick={onClick}
        variant="outlined"
        classes={{
            root: classes.linkButton, // class name, e.g. `classes-nesting-root-x`
            label: classes.textButton, // class name, e.g. `classes-nesting-label-x`
          }}
        >
            Bebidas
        </Button>

    )  
}

export const LogoutButton = () => {

    const useStyles = makeStyles({
        linkButton: {
          color: '#f7bb28', 
          borderColor: '#f7bb28',
          height: '50px',
        },
        textButton: {
            color: '#f7bb28',
        },
    })


    const classes = useStyles()    

    return(
        <Button
        variant="outlined"
        classes={{
            root: classes.linkButton, // class name, e.g. `classes-nesting-root-x`
            label: classes.textButton, // class name, e.g. `classes-nesting-label-x`
          }}
        >
            <ExitToApp/>
        </Button>

    )  
}