import React from 'react'
import { 
    Button,
    Link,
    makeStyles,
} from '@material-ui/core'

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

function LinkButton(){
    const classes = useStyles()    

    return(
        <Button
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

export default LinkButton;