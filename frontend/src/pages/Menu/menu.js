import '../../App.css';
import React from 'react'
import { useUser } from '../../contexts/User'
import { Box,  makeStyles } from '@material-ui/core'
import HeaderMenu from '../../components/headerMenu'
import GridBebidas from '../../components/gridBebidas'
const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#282c34',

  },
})

function Menu() {
  const { user } = useUser()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HeaderMenu />
      <GridBebidas/>
    </div>
  );
}

export default Menu;