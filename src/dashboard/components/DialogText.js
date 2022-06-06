import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import "../CSS/token.css"
import myData from './data.json';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogText() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button class="button-26" style={{fontFamily:"Nosifer",backgroundColor:"#4F46E5",borderRadius:"23px"}} role="button"
        onClick={handleClickOpen}>
          View Winners
        </button>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{fontFamily:"Nosifer"}}>{"Winners"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontFamily:"Nosifer",fontSize:"0.7em"}} id="alert-dialog-slide-description">
            {myData.subtext_2}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button style={{fontFamily:"Nosifer",color:"#4F46E5"}} onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
