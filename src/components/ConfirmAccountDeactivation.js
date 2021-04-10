import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Header from './Header';

export default function ConfirmBox(props) {

  let loggedCustomer = JSON.parse(sessionStorage.getItem("token"));
  const [open, setOpen] = React.useState(true);

  const handleAgree = () => {
    setOpen(false);
    props.history.push({
        pathname: '/deactivate',
      });   
  };

  const handleDisagree = () => {
    setOpen(false);
    props.history.push({
        pathname: '/profile',  
      });   
  };

  return (
    <div>
      <Header/>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Deactivate Account?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Once you will deactivate your account, you will not be able to undo it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAgree}  variant="contained" color="primary">
              Agree
            </Button>
            <Button onClick={handleDisagree}  variant="contained" color="secondary">
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
