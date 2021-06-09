import React from 'react'
import { Box, TextField,  makeStyles, Typography, fade } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

export const TextFilter = () => {
    const useStyles = makeStyles(() => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          width: '100%',
          border: '1px solid #f7bb28',
          borderRadius: 4,
          '& .MuiOutlinedInput-input':{
            fontSize: 16,
            color: '#ffffff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'none',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        },
        box: {
            marginInline: 100,
        },
      }));

      const classes = useStyles()

    return (
        <Box>
            <TextField
            id="outlined-full-width" 
            placeholder="Nome da bebida"
            margin="normal"
            className={classes.textField}
            variant="outlined"
            />
        </Box>
    )
}