import '../../App.css';
import React from 'react'
import { styled } from '@material-ui/core/styles';
import Logo from '../../components/logotipo'
import { TextInputUsual, TextInputPassword} from '../../components/textInput'
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
      <TextInputUsual/>
      <TextInputPassword/>
    </Box>
    

  );
}

export default Login;