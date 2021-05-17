import React, {useState, useRef, useEffect} from 'react'
import { Box, 
        makeStyles, 
        TextField, 
        InputAdornment,
    } from '@material-ui/core'
import { AccountCircle, Lock, Visibility, VisibilityOff }from '@material-ui/icons';
import {useField} from '@unform/core'


export default function TextInput({name, ...rest}) {
    let useStyles = makeStyles({
        root: {
            id: "filled-basic",
            label: "Filled",
            //'#282c34',          
        },
        input: {        
            backgroundColor: '#2a2c30',
            width: '80%',
            height: '10%',
            borderRadius: 5,
            borderWidth: 3,
            border: 'solid rgba(247, 187, 40, 0.05)',            
        },
    })

    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name)
    
    useEffect(()=> {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
    }, [fieldName, registerField])

    return(
      
      <input ref={inputRef} {...rest} defaultValue={defaultValue} className={useStyles().input} />
    
    )
}
