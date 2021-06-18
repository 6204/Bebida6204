import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Button, Paper, ButtonBase, Typography} from '@material-ui/core';
import {LocalBar, MoreVert} from '@material-ui/icons'

const bebidas = [
{
    id: 1,
    categoriaId: 1,
    name: 'Brahma Chopp',
    teor: '5%',
    categoria: 'Cerveja',
}, 
{
    id: 2,
    categoriaId: 1,
    name: 'Brahma Duplo malte',
    teor: '6%',
    categoria: 'Cerveja',
},
{
    id: 3,
    categoriaId: 2,
    name: 'Quinta do Morgado',
    teor: '25%',
    categoria: 'Vinho',
},
{
  id: 4,
  categoriaId: 3,
  name: 'Black Label',
  teor: '42%',
  categoria: 'Whisky',
},
{
  id: 5,
  categoriaId: 3,
  name: 'Red Label',
  teor: '47%',
  categoria: 'Whisky',
},
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grid: {
    justifyContent: 'center',
    maxWidth: '100%',
    width: '100%',
  },
  gridArea: {
    maxWidth: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: 500,
    height: 150,
    background: '#f7bb28',
    color: '#282c34',
    justifyContent: 'space-between',
  },
  
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <Box className={classes.gridArea} >
          <Grid container className={classes.grid} spacing={3}  >
            {
                bebidas.map((item, index) => (
                    <Grid item  lg={3} md={4} sm={6} xs={12}>
                        <Paper className={classes.paper}>
                          <Box className={classes.box}>
                            <Typography
                            variant='h5'
                            style={{color: '#282c34'}} 
                            >                             
                              {item.name}         
                               
                            </Typography>
                            <ButtonBase style={{color: '#f7bb28', height: 40, background: '#282c34'}}>
                                <MoreVert/>  
                            </ButtonBase>                                                      
                          </Box>
                          <Box>
                            <Box>
                              <Typography
                                variant='h6'
                              >
                                {`Teor Alcólico: ${item.teor}`}
                              </Typography>
                            </Box>
                            <Box style={{ marginTop: 10}}>
                              <Typography
                                variant='h7'
                              >
                                {`Categoria: ${item.categoria}`}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                    </Grid>
                ))

            }
          </Grid>
    </Box>
  );
}