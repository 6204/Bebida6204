import '../../App.css';
import React, { useState, useRef } from 'react'
import * as Yup from 'yup';
import Logo from '../../components/logotipo.js'
import  TextInput from '../../components/textInput'
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
  const formRef = useRef(null)

  async function verify(data, {reset}){
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O E-mail é obrigatório'),      
        senha: Yup.string()
          .min(3, 'No mínimo três caracteres')
          .required('A senha é obrigatória')
      })
      //history.push("/menu")
      await schema.validate(data, {
        abortEarly: false,
      }) 

      formRef.current.setErrors({}) 
      reset()
    } catch(err) {
      if (err instanceof Yup.ValidationError){
        const errorMessages = {}
        
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages) 
      }
    }

  }
  
  return (
    <Box className={useStyles().root} >
      <Logo/>
      <Form ref= {formRef} borderWidth={5} className={useStyles().inputArea} onSubmit={verify} >
          <TextInput type="email" name='email' title={'E-mail'}/>
          <TextInput type="password" name='senha' title={'Senha'}/>
          <LoginButton title={`LOGIN`}/>
        </Form>  
    </Box>
    

  );
}


export default Login