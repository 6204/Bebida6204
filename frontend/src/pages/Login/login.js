import '../../App.css';
import React, { useState } from 'react'
import * as yup from 'yup';
import Logo from '../../components/Logotipo.js'
import { TextInputUsual, TextInputPassword } from '../../components/TextInput'
import {InputArea} from '../../components/InputArea'
import {LoginButton} from '../../components/Button'
import { Box, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

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

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  function verify(){
    history.push("/menu") 
  }
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <InputArea>
        <TextInputUsual usuario={usuario} setUsuario={setUsuario}  />
        <TextInputPassword password={password} setPassword={setPassword}/>
        <LoginButton action={()=>verify()} title={`ENTRAR`} />
      </InputArea>
    </Box>
    

  );
}


export default Login;