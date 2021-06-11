import React, {useState} from 'react'
import { Box, FormControl,  makeStyles, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const categoria = [
    {
        id: 1,
        name: 'Cerveja',
    }, 
    {
        id: 2,
        name: 'Vinho',
    },
    {
        id: 3,
        name: 'Whisky',
    },
    ]


export const CategoryFilter = () => {
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          width: '100%',          
        },
        box: {
            width: '100%',
            border: '2px solid #f7bb28',
            borderRadius: 4,
            '& .MuiSelect-select.MuiSelect-select': {
                color: '#ffffff',
            },
            '& .MuiFormLabel-root':{
                color: '#ffffff',
            },
            '& .MuiFormLabel-root.Mui-focused': {
                color: '#f7bb28',
            },
            '& .MuiSelect-nativeInput': {
                color: '#f7bb28',
                height: '100%',
            },
            '& .MuiInput-underline:before': {
                height: '100%',
                width: '100%',
                borderBottom: '2px solid #f7bb28',
            },
            '& .MuiInput-underline:after': {
                borderBottom: '2px solid #f7bb28',
            },
            '& .MuiInput-formControl': {
                width: '90%',
            },
            '& .MuiBox-root MuiBox-root-1289': {
                height: '100%',
            },
        },
      }));

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleOpen = () => {
    setOpen(true);
    };
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Categoria</InputLabel>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
            >
            <MenuItem value=''>
                <em>selecione categoria</em>
            </MenuItem>   
            {
                categoria.map((item, index) => (
                    
                    <MenuItem value={item.name}>
                        <em>{item.name}</em>
                    </MenuItem> 
                ))
            }            
            </Select>
        </FormControl>
        </Box>
    )
}