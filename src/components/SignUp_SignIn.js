import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Header2 from './Header2';

export default function ConfirmBox(props) {
  const [open, setOpen] = React.useState(true);

  const handleLogInAsCustomer = () => {
    setOpen(false);
    props.history.push({
        pathname: '/login',  
      });   
  };

  const handleLogInAsBroker = () => {
    setOpen(false);
    props.history.push({
        pathname: '/login_broker',  
      });   
  };

  const handleSignUpAsBroker = () => {
    setOpen(false);
    props.history.push({
        pathname: '/register_broker',  
      });   
  };

  const handleSignUpAsCustomer = () => {
    setOpen(false);
    props.history.push({
        pathname: '/register',  
      });   
  };

  return (
    <div>
      <Header2/>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Welcome To The RealEstateBroker"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleLogInAsCustomer}  variant="contained" color="primary">
              Login as customer
            </Button>
            <Button onClick={handleLogInAsBroker}  variant="contained" color="primary" style={{backgroundColor: "#2b9134"}}>
              Login as broker
            </Button>
            <Button onClick={handleSignUpAsCustomer}  variant="contained" color="primary">
              Signup as customer
            </Button>
            <Button onClick={handleSignUpAsBroker}  variant="contained" color="secondary" style={{backgroundColor: "#2b9134"}}>
              Signup as broker
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}