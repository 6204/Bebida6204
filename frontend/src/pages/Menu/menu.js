import React from 'react'
import { useUser } from '../../contexts/User'
import { Box,  makeStyles, Typography } from '@material-ui/core'
import HeaderMenu from '../../components/headerMenu'
import GridBebidas from '../../components/gridBebidas'
import {TextFilter} from '../../components/textFilter'
import {CategoryFilter} from '../../components/categoryFilter'
const useStyles = makeStyles({
  root: {
    background: '#282c34',
    height: '100%',
    minHeight: '100vh',

  },
  filters: {
    marginInline: 100,
    display: 'flex',
    flexDirection: 'row',
    background: '#ffffff', 
    justifyContent: 'space-between',
},
  textFilterArea: {
    width: '60%',
  },
  categoryFilterArea: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#c9c9c9',
    '& .MuiBox-root MuiBox-root-1289': {
      height: '100%',
  },
  },
})

function Menu() {
  const { user } = useUser()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HeaderMenu />
      <Typography
            variant='h5'
            style={{fontWeight: 600, color: '#f7bb28', marginTop: 50, marginBottom: 10, marginInline: 100,}} 
            >
                Filtros  
      </Typography>
      <Box className={classes.filters}>
        <Box className={classes.textFilterArea}>
          <TextFilter/>
        </Box>
        <Box className={classes.categoryFilterArea}>
          <CategoryFilter/>
        </Box>
      </Box>
      <GridBebidas/>
    </div>
  );
}

export default Menu;