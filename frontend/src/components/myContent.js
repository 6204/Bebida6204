import React from 'react'
import {makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      paddingInline: 200,
      boxSizing: 'border-box',
  
    },
  })

function MyContent(props) {
    const classes = useStyles()
    return (
      <Box className={classes.root}>
          {props.children}
      </Box>
    );
  }
  
export default MyContent;