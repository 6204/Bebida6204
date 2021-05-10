import '../../App.css';
import React, { useState } from 'react'
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

  const [usuario, setUsuario] = useState('Luan')
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <InputArea>
        <TextInputUsual usuario={usuario} setUsuario={setUsuario}  />
        <TextInputPassword/>
        <LoginButton action={()=>{window.location = "/Menu";}} />
      </InputArea>
    </Box>
    

  );
}


export default Login;