import React from 'react'
import { Box,  makeStyles, AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import Logo from './logoSemFundo'
import { useHistory } from 'react-router-dom';
import {AddButton, LinkButton, LogoutButton} from './Button'
const useStyles = makeStyles({
    headerArea: {
      background: '#282c34',//'#282c34',
      height: '10vh',
      display: 'flex',
    },
    headerLogo: {
      backgroundColor: '#282c34',
    },
    header: {
      background: '#f7bb28',//'#282c34',
      
    },
    appBar: {
      boxShadow: '0px 2px 4px -1px rgb(247 187 40 / 20%), 0px 4px 5px 0px rgb(247 187 40 / 14%), 0px 1px 10px 0px rgb(247 187 40 / 12%)',  
      flexDirection: 'row',
      alignItems: 'center', 
      backgroundColor: '#282c34',
      paddingInlineEnd: 100,
      paddingInlineStart: 100,
    },
    space: {
      width: '10vh',
    },
    grow: {
      flexGrow: 1,
    },
  })

function HeaderMenu() {
  let history = useHistory()

    const goToBebidas = () => {
      history.push("/bebidas")
    }
    const goToMenu = () => {
      history.push("/menu")
    }

    const classes = useStyles()

    return (
      <Box className={useStyles().headerArea}>
        <AppBar color='inherit' className={classes.appBar}>
          <Button onClick={goToMenu}>
            <Logo/>
          </Button>
          <div className={classes.space}/>
          <LinkButton onClick={goToMenu} />
          <div className={classes.grow}/>
          <AddButton onClick={goToBebidas} />
          <div className={classes.space}/>
          <LogoutButton/>
          <div className={classes.space}/>
        </AppBar>
        

      </Box>
    );
  }
  
  export default HeaderMenu;