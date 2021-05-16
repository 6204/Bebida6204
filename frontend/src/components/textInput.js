import React, {useState} from 'react'
import Logo from '../assets/logobebida.png'
import { Box, 
        makeStyles, 
        TextField, 
        Input, 
        InputLabel, 
        InputAdornment,
        Grid,
        IconButton,
    } from '@material-ui/core'
import { AccountCircle, Lock, Visibility, VisibilityOff }from '@material-ui/icons';



export const TextInputUsual = ({usuario, setUsuario}) => {
    let useStyles = makeStyles({
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
        onChange={(text) => {
          setUsuario(text.target.value)
        }}
        id="input-with-icon-textfield"
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
      />
    )
}

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

}