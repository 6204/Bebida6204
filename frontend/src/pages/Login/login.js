import '../../App.css';
import React, { useState } from 'react'
import * as yup from 'yup';
import Logo from '../../components/Logotipo.js'
import  TextInputUsual from '../../components/TextInput'
import {InputArea} from '../../components/InputArea'
import {LoginButton} from '../../components/Button'
import { Box, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import {Form} from '@unform/web'
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

  let history = useHistory()
  
  function verify(data){
    console.log(data)
    //history.push("/menu") 
  }
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <Form onSubmit={verify} >
          <TextInputUsual name='name'/>
          <TextInputUsual name='password'/>
          <button type="submit">ENVIAR</button>
        </Form>  
    </Box>
    

  );
}


export default Login;