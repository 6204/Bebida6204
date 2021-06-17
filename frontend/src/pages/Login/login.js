import React, { useRef } from 'react'
import * as Yup from 'yup';
import {Logotipo} from '../../components/logotipo.js'
import  TextInput from '../../components/textInput'
import {LoginButton} from '../../components/Button'
import { Box,  makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import {Form} from '@unform/web'
import api from '../../api'
import {useUser} from '../../contexts/User';
const useStyles = makeStyles({
  root: {
    display:'flex',
    backgroundColor: '#282c34',//'#282c34',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formArea: {
    display:'flex',    
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    height: '355px',
    width: '355px',
    border: '1px solid ',
    borderColor: '#f7bb28',
    borderRadius: 20,
    boxSizing: 'border-box',

  },
  inputArea: {
    display: 'flex',
    width: '100%',
    height: '70px',
    flexDirection: 'column',
    justifyContent: 'center',
  }, 
})
 
/* const initialData = {
  email: 'Luan Santos',
} */

function Login() {

  let history = useHistory()
  const formRef = useRef(null)
  const {user, setUser} = useUser();

  async function autenticar({email, password}){
    
    try {
      const response = await api.post('/authenticate', {
        email: email,
        password: password
      })
      const tokenAndUser = response.data
      if(response){
        await setUser(tokenAndUser)
        history.push("/menu")
      }
    } catch(err) {
      const errorMessages = {}
      err.response.data.forEach(error => {
        if(error.field == 'email'){
          errorMessages[error.field] = `O E-mail é inválido`
        } else if(error.field == 'password'){
          errorMessages[error.field] = `A senha não é válida`
        } else {
          errorMessages[error.field] = `Deu Bigode`
        }
      })
      formRef.current.setErrors(errorMessages)
    }
  } 

  async function verify(data, {reset}){
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O E-mail é obrigatório'),      
        password: Yup.string()
          .min(3, 'No mínimo três caracteres')
          .required('A senha é obrigatória')
      })
      await schema.validate(data, {
        abortEarly: false,
      }) 

      autenticar(data)

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
      <Logotipo/>
      <Form ref= {formRef} className={useStyles().formArea} onSubmit={verify} > 
        <Box className={useStyles().inputArea}>
          <Typography style={{color: '#ffffff', marginBottom: 0,}} variant="subtitle2" gutterBottom>
          E-mail
          </Typography>
          <TextInput name='email' title={'E-mail'}/>
        </Box>
        <Box className={useStyles().inputArea}>
          <Typography style={{color: '#ffffff', marginBottom: 0,}} variant="subtitle2" gutterBottom>
          Senha
          </Typography> 
          <TextInput type="password" name='password' title={'Senha'}/>
        </Box>
        <LoginButton title={`LOGIN`}/>
       </Form>  
    </Box>
    

  );
}


export default Login