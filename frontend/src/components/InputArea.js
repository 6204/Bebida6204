import React from 'react'
import { 
    Box,
    makeStyles,
} from '@material-ui/core'

export const InputArea = (props) => {
    let useStyles = makeStyles({
        inputArea: {
            display:'flex',    
            flexDirection: 'column',
            justifyContent: 'space-around',
            borderWidth: 2,
            borderColor: '#000000',
            alignItems: 'center',
            height: '35vh',
            width: '35vh',
        
        } 
    })

    return (
        <Box  borderRadius={25} border={1} borderColor={"#fabd28"} className={useStyles().inputArea}>
            {props.children}
        </Box>
        

    )
}