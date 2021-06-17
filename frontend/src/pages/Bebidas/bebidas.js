import React, { useRef } from 'react'
import { useUser } from '../../contexts/User'
import HeaderMenu from '../../components/headerMenu'
import MyContainer from '../../components/myContainer'
import MyModal from '../../components/myModal'
import {LoginButton} from '../../components/Button'
import  TextInput from '../../components/textInput'
import MySelect from '../../components/select'
import {Form} from '@unform/web'
import { Box, Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#282c34',//'#282c34',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formArea: {
    display: 'flex',
    flexDirection: 'column',
    marginInline: 100,
    backgroundColor: '#000000',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60px',
    backgroundColor: '#c9c9c9',
  },  
  textButtonArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  }, 
  textButton: {
    color: '#ffffff',
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
  


  function verify(data) {
    console.log(data)
  }

  return (
    <MyContainer>
      <HeaderMenu />
      <Box className={classes.formArea}>
        <Typography
          variant='h5'
          style={{fontWeight: 600, color: '#f7bb28', marginTop: 50, marginBottom: 10, marginInline: 100,}} 
          >
                  Cadastro de Bebidas
        </Typography>
        <Form  ref={formRef} onSubmit={verify} className={classes.formArea}>
          <Typography style={{color: '#ffffff',}} variant="subtitle2" gutterBottom>
          Nome
          </Typography> 
          <Box className={classes.inputArea}>
            <TextInput name='nome' title={'Nome'}/>
          </Box>
          <MyModal/>
          <Typography style={{color: '#ffffff',}} variant="subtitle2" gutterBottom>
          Teor alcóolico
          </Typography> 
          <TextInput name='teor' title={'Teor Alcoólico'}/>  
          <MySelect  name='categoria' 
          options={categoria} 
          isSearchable
          />
          <LoginButton title={`Cadastrar`}/>
        </Form > 
      </Box>
    </MyContainer>
  );
}

export default Bebidas;