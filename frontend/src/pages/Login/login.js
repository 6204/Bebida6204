import '../../App.css';
import React from 'react'
import Logo from '../../components/Logotipo.js'
import { TextInputUsual, TextInputPassword } from '../../components/TextInput'
import {InputArea} from '../../components/InputArea'
import {LoginButton} from '../../components/Button'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display:'flex',
    backgroundColor: '#282c34',//'#282c34',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
})
 
function Login() {
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <InputArea>
        <TextInputUsual/>
        <TextInputPassword/>
        <LoginButton/>
      </InputArea>
    </Box>
    

  );
}


export default Login;