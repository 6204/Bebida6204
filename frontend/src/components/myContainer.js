import React from 'react'
import {makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      background: '#282c34',
      height: '100%',
      minHeight: '100vh',      
  
    },
  })

function MyContainer(props) {
    const classes = useStyles()
    return (
      <Box className={classes.root}>
          {props.children}
      </Box>
    );
  }
  
  export default MyContainer;