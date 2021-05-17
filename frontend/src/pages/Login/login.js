import '../../App.css';
import React, { useState } from 'react'
import * as yup from 'yup';
import Logo from '../../components/Logotipo.js'
import  TextInput from '../../components/TextInput'
import {InputArea} from '../../components/InputArea'
import {LoginButton} from '../../components/Button'
import { Box, Button, makeStyles } from '@material-ui/core'
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
  inputArea: {
    display:'flex',    
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '35vh',
    width: '35vh',
    border: '1px solid ',
    borderColor: '#f7bb28',
    borderRadius: 20,

  }, 
})
 
const initialData = {
  name: 'Luan Santos',
}

function Login() {

  let history = useHistory()
  
  function verify(data){
    console.log(data)
    //history.push("/menu") 
  }
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <Form /* initialData={initialData} */borderWidth={5} className={useStyles().inputArea} onSubmit={verify} >
          
          <TextInput type="name" name='name'/>
          <TextInput type="password" name='password'/>
          <LoginButton title={`LOGIN`}/>
        </Form>  
    </Box>
    

  );
}


export default Login;