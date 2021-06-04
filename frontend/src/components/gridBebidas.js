import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import {LocalBar} from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';

const bebidas = [
{
    id: 1,
    categoriaId: 1,
    name: 'Brahma Chopp',
    teor: '5%',
}, 
{
    id: 2,
    categoriaId: 1,
    name: 'Brahma Duplo malte',
    teor: '6%',
},
{
    id: 3,
    categoriaId: 2,
    name: 'Quinta do Morgado',
    teor: '25%',
},
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <Box p={6} style={{ paddingInline: 200}}>
          <Typography
           variant='h5'
           style={{fontWeight: 600, color: '#f7bb28'}} 
          >
            Filtros  
          </Typography>
          <Grid container spacing={4}  >
            {
                bebidas.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <LocalBar/>
                            {item.name}
                        </Box>
                        <Box>
                            <LocalBar/>
                            {item.name}
                        </Box>
                        <Box>
                            <LocalBar/>
                            {item.name}
                        </Box>
                    </Grid>
                ))

            }
          </Grid>
    </Box>
  );
}