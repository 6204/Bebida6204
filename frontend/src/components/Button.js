import React from 'react'
import { 
    Button,
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