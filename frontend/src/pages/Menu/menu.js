import React from 'react'
import { useUser } from '../../contexts/User'
import { Box,  makeStyles } from '@material-ui/core'
import HeaderMenu from '../../components/headerMenu'
import GridBebidas from '../../components/gridBebidas'
import {TextFilter} from '../../components/textFilter'
const useStyles = makeStyles({
  root: {
    background: '#282c34',
    height: '100%',
    minHeight: '100vh',

  },
})

function Menu() {
  const { user } = useUser()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HeaderMenu />
      <TextFilter/>
      <GridBebidas/>
    </div>
  );
}

export default Menu;