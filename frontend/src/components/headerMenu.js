import React from 'react'
import { Box,  makeStyles } from '@material-ui/core'
import Logo from './logoSemFundo'
const useStyles = makeStyles({
    header: {
      background: 'linear-gradient(45deg, #111111 30%, #000000 90%)',//'#282c34',
      height: '10vh',
      width: '100%',
      flexDirection: 'row',
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

function HeaderMenu() {
  
    return (
      <Box className={useStyles().header}>
        <Logo />
      </Box>
    );
  }
  
  export default HeaderMenu;