import React, { useRef } from 'react'
import { useUser } from '../../contexts/User'
import HeaderMenu from '../../components/headerMenu'
import MyContainer from '../../components/myContainer'
import  TextInput from '../../components/textInput'
import {CategoryFilter} from '../../components/categoryFilter'
import {Form} from '@unform/web'
import { Box, Typography, makeStyles } from '@material-ui/core'

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
})

function Bebidas() {
  const {user, setUser} = useUser();
  const formRef = useRef(null)
  const classes = useStyles()

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
        <Form  ref= {formRef}  >         
          <div>
            <TextInput name='nome' title={'Nome'}/>
          </div>
          <TextInput name='teor' title={'Teor Alcoólico'}/>  
        </Form> 
      </Box>
    </MyContainer>
  );
}

export default Bebidas;