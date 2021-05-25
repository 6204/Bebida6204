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