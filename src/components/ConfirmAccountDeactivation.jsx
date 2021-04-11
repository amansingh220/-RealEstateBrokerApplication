import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Header from "./Header.jsx";

// Below functional component ask the confirmation about deactivating his/her account.
export default function ConfirmAccountDeactivation(props) {
  let loggedUser = JSON.parse(sessionStorage.getItem("token"));
  let deactivationPath =
    loggedUser.broId === undefined
      ? "/deactivate_customer_account"
      : "/deactivate_broker_account";
  let cancelDeactivationPath =
    loggedUser.broId === undefined ? "/profile" : "/broker_profile";
  const [open, setOpen] = React.useState(true);

  // Below implemented function handles the event which is fired when user presses agree button.
  const handleAgree = () => {
    setOpen(false);
    props.history.push({
      pathname: deactivationPath,
    });
  };

  // Below implemented function handles the event which is fired when user presses agree button.
  const handleDisagree = () => {
    setOpen(false);
    props.history.push({
      pathname: cancelDeactivationPath,
    });
  };

  return (
    <div>
      <Header />
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Deactivate Account?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Once you will deactivate your account, you will not be able to
              undo it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAgree} variant="contained" color="primary">
              Agree
            </Button>
            <Button
              onClick={handleDisagree}
              variant="contained"
              color="secondary"
            >
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
