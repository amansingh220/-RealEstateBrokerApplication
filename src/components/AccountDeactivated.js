import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';
import Header from './Header2';

export default function ConfirmBox(props) {
  const [open, setOpen] = React.useState(true);
  let history = useHistory()

  const handleAgree = () => {
    setOpen(false);
    sessionStorage.clear();
    localStorage.clear();
    history.push({
        pathname: '/',
      });   
  };

  return (
    <div>
      <Header/>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Account Deactivated Successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Redirecting to the home.
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
