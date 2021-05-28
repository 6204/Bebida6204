import '../../App.css';
import React from 'react'
import { useUser } from '../../contexts/User'
import { Box,  makeStyles } from '@material-ui/core'
import HeaderMenu from '../../components/headerMenu'
const useStyles = makeStyles({
  root: {
    display:'flex',
    backgroundColor: '#282c34',//'#282c34',
    height: '100vh',
  },
})

function Menu() {
  const { user } = useUser()

  return (
    <Box className={useStyles().root}>
      <HeaderMenu>
        
      </HeaderMenu>
    </Box>
  );
}

export default Menu;