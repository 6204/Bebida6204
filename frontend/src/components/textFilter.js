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
          width: '50%',
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
              borderColor: 'none',
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
        <Box className={classes.box}>
            <Typography
            variant='h5'
            style={{fontWeight: 600, color: '#f7bb28', marginTop: 50, marginBottom: 10,}} 
            >
                Filtros  
            </Typography>
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