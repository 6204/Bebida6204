import '../../App.css';
import React from 'react'
import { styled } from '@material-ui/core/styles';
import Logo from '../../components/Logotipo.js'
import { TextInputUsual, TextInputPassword } from '../../components/TextInput'
import {InputArea} from '../../components/InputArea'
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

  inputArea: {
    display:'flex',    
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '35vh',
    width: '35vh',

  }


})
 



function Login() {
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <Box borderRadius={25} border={1} borderColor={"#fabd28"} className={useStyles().inputArea}>
        <TextInputUsual/>
        <TextInputPassword/>
      </Box>
    </Box>
    

  );
}


export default Login;