import React from 'react'
import { 
    Button,
    Link,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
    linkButton: {
        background: '#282c34',   
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
            backgroundColor: "#282c34"
        },
        "&:last-child": {
            borderRight: "solid 1px #cccccc"
        } 
    
    },
    linkButtonP: {
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
            backgroundColor: "#282c34"
        },
        "&:last-child": {
            borderRight: "solid 1px #cccccc"
        } 
    
    },
    textButton: {
        color: '#ffffff',
    },
})

function LinkButton(){


    return(
        <Button
        variant="outlined"
        classes={{
            root: useStyles().linkButton, // class name, e.g. `classes-nesting-root-x`
            label: useStyles().textButton, // class name, e.g. `classes-nesting-label-x`
          }}
        >
            Bebidas
        </Button>

    )
}

export default LinkButton;