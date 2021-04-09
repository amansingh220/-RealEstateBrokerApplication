import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';
import Header2 from './Header2';

export default function RedirectToDashboard(props) {
  const [open, setOpen] = React.useState(true);
  let history = useHistory()

  const handleAgree = () => {
    setOpen(false);
    history.push({
        pathname: '/register',
      });   
  };

  return (
    <div>
      <Header2/>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Registration has been Failed"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Try again after some time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree}  variant="contained" color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}