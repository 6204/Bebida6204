import '../../App.css';
import React from 'react'
import { useUser } from '../../contexts/User'
import { Box,  makeStyles } from '@material-ui/core'
import HeaderMenu from '../../components/headerMenu'
const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#282c34'
  },
  cores: {
    background: '#282c34',
    texto: '#f7bb28'
  }
})

function Menu() {
  const { user } = useUser()
  const classes = useStyles()
  return (
    <Box className={useStyles().root}>
      <HeaderMenu />
    </Box>
  );
}

export default Menu;