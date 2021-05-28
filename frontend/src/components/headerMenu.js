import React from 'react'
import { Box,  makeStyles } from '@material-ui/core'
import Logo from './logoSemFundo'
import LinkButton from './linkButton'
const useStyles = makeStyles({
    headerArea: {
      background: '#f7bb28',//'#282c34',
      height: '11vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    headerLogo: {
      backgroundColor: '#282c34',
      height: '10.9vh',
    },
    header: {
      background: '#f7bb28',//'#282c34',
      
    },
  })

function HeaderMenu() {
  
    return (
      <div className={useStyles().headerArea}>
       <div className={useStyles().headerLogo}>
        <Logo/>
       </div>

       <div className={useStyles().header}>
        <LinkButton/>
       </div>
      </div>
    );
  }
  
  export default HeaderMenu;