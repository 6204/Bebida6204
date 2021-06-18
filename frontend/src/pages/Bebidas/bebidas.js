import React, { useRef } from 'react'
import * as Yup from 'yup';
import { useUser } from '../../contexts/User'
import HeaderMenu from '../../components/headerMenu'
import MyContainer from '../../components/myContainer'
import MyModal from '../../components/myModal'
import {LoginButton} from '../../components/Button'
import  TextInput from '../../components/textInput'
import MySelect from '../../components/select'
import {Form} from '@unform/web'
import MyContent from '../../components/myContent'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  formArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50px',

  }, 
  categoryArea:{
    marginTop: 35,
  }, 
  textButtonArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  }, 
  textButton: {
    color: '#ffffff',
  },
  buttonArea: {
    marginTop: 35,
    width: '100%',
    display: 'flex', 
    justifyContent: 'flex-end',
  }, 
})

function Bebidas() {
  const {user, setUser} = useUser();
  const formRef = useRef(null)
  const classes = useStyles()

  const categoria = [
    {
      value: 1,
      label: 'Cerveja',
    }, 
    {
      value: 2,
      label: 'Vinho',
        
    },
    {
      value: 3,
      label: 'Whisky',
    },
]
  


  async function verify(data, {reset}) {
    try {
      const schema = Yup.object().shape({
        categoria: Yup.number()
          .required('Selecione uma categoria. Caso não exista, crie uma nova.'),      
        nome: Yup.string()
          .required('O nome é obrigatório'),
        teor: Yup.string()
          .required('O teor alcóolico deve ser informado'),
      })
      await schema.validate(data, {
        abortEarly: false,
      }) 

      console.log('Passou')

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
    <MyContainer>
      <HeaderMenu />
      <MyContent>
        <Typography
          variant='h5'
          style={{fontWeight: 600, color: '#f7bb28',}} 
          >
          Cadastro de Bebidas
        </Typography>
        <Form  ref={formRef} onSubmit={verify} className={classes.formArea}>   
          <Box className={classes.categoryArea}>
            <MySelect  name='categoria' 
            options={categoria} 
            isSearchable
            />       
            <MyModal/>
          </Box>
          <Box className={classes.categoryArea}>
            <Typography style={{color: '#ffffff',}} variant="subtitle2" gutterBottom>
            Nome
            </Typography> 
            <Box className={classes.inputArea}>
              <TextInput name='nome' title={'Nome'}/>
            </Box>
          </Box>
          <Box className={classes.categoryArea}>
            <Typography style={{color: '#ffffff',}} variant="subtitle2" gutterBottom>
            Teor alcóolico
            </Typography> 
            <Box className={classes.inputArea}>
              <TextInput name='teor' title={'Teor Alcoólico'}/> 
            </Box>
          </Box>           
          <Box className={classes.buttonArea}>
            <div style={{ width: '15%', minWidth: 100,}}>
            <LoginButton  title={`Cadastrar`}/>
            </div>
          </Box>
        </Form >
      </MyContent>
    </MyContainer>
  );
}

export default Bebidas;