import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, Typography, makeStyles, Button } from '@material-ui/core'
import {Add} from '@material-ui/icons'

const useStyles = makeStyles({
    textButtonArea: {
      display: 'flex',
      justifyContent: 'flex-end',
    }, 
    textButton: {
      color: '#ffffff',
      textTransform: 'none',
      border: 'none',
    }, 
  })

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const classes = useStyles()
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box className={classes.textButtonArea}>
        <Button variant="outlined" className={classes.textButton}  onClick={handleClickOpen}>
           <Add/> Nova categoria de bebida
        </Button>
      </Box> 
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}