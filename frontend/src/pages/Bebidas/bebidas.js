import React, { useRef } from 'react'
import { useUser } from '../../contexts/User'
import HeaderMenu from '../../components/headerMenu'
import MyContainer from '../../components/myContainer'
import {LoginButton} from '../../components/Button'
import  TextInput from '../../components/textInput'
import {CategoryFilter} from '../../components/categoryFilter'
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
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    marginInline: 100,

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
      <Box className={classes.inputArea}>
        <Typography
                variant='h5'
                style={{fontWeight: 600, color: '#f7bb28', marginTop: 50, marginBottom: 10, marginInline: 100,}} 
                >
                  Cadastro de Bebidas
        </Typography>
        <Form  ref={formRef} onSubmit={verify}> 
          <TextInput name='nome' title={'Nome'}/>
          <Box className={classes.textButtonArea}>
            <Button className={classes.textButton}>+ Nova categoria de Bebida </Button> 
          </Box>
          <TextInput name='teor' title={'Teor Alcoólico'}/>  
          <MySelect  name='categoria' options={categoria} isSearchable/>
          <LoginButton title={`Cadastrar`}/>
        </Form > 
      </Box>
    </MyContainer>
  );
}

export default Bebidas;