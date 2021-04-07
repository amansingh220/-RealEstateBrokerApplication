import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';
import Header2 from './Header2';
import { connect } from 'react-redux'

function ConfirmBox(props) {
  const [open, setOpen] = React.useState(true);
  let history = useHistory()

  const handleOk = () => {
    setOpen(false);
    history.push({
        pathname: '/login', 
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
        <DialogTitle id="alert-dialog-title">{"Registration successful, please note your login credentials."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your UserId is {props.customerData.customer.userId}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Your Password is {props.customerData.customer.password}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}  variant="contained" color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    customerData: state.addedCustomerDetails
  }
}

export default connect(
  mapStateToProps,
  null
)(ConfirmBox)