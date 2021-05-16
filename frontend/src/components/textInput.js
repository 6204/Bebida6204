import React, {useState, useRef, useEffect} from 'react'
import { Box, 
        makeStyles, 
        TextField, 
        InputAdornment,
    } from '@material-ui/core'
import { AccountCircle, Lock, Visibility, VisibilityOff }from '@material-ui/icons';
import {useField} from '@unform/core'


export default function TextInputUsual({name}) {
    let useStyles = makeStyles({
        root: {
            id: "filled-basic",
            label: "Filled",
            //'#282c34',          
        },
        input: {
            display: 'flex',
            height: '100hv',
            width: '100hv',           
            backgroundColor: '#2a2c30',
            borderColor: '#ffffff',
            "&:hover": {
                backgroundColor: "#2a2c30",
            }
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
      
        <input ref={inputRef} className={useStyles().input}/> 

        /* <TextField
        id="input-with-icon-textfield"
        ref={inputRef}
        label="Usuário"
        variant="outlined"
        className={useStyles().input}
        InputLabelProps={{
            className: useStyles().icon
        }}
        InputProps={{ 
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle className={useStyles().icon}/>
            </InputAdornment>
          ),
        }}
      />  */
    )
}
/* 
export const TextInputPassword = ({password, setPassword}) => {
    const useStyles = makeStyles({
        root: {
            id: "filled-basic",
            label: "Filled",
            
            //'#282c34',
          
        },
        icon: {
            color: '#fabd28',
            marginRight: 5,
        },
        input: {
            backgroundColor: '',
            borderColor: '#ffffff',
            "&:hover": {
                backgroundColor: "#2a2c30",
            }

        },
    })

        
    
    return(

        <TextField
        id="outlined-adornment-password"
        type={'password'}
        onChange={(text) => {
          setPassword(text.target.value)
        }}
        variant="outlined"
        label="Senha"
        className={useStyles().input}
        InputLabelProps={{
            className: useStyles().icon
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock className={useStyles().icon}/>
            </InputAdornment>
          ),
        }}
      />
    )

} */