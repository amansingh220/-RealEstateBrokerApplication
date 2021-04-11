import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router";
import Header from "./Header.jsx";

// Below functional component printing message to a customer in an alert box that his account deactivation has been failed.
export default function AccountDeactivationFailed() {
  const [open, setOpen] = React.useState(true);
  let history = useHistory();

  // Below implemented function handles the event which is fired when customer presses ok button.
  const handleOk = () => {
    setOpen(false);
    history.push({
      pathname: "/profile",
    });
  };

  return (
    <div>
      <Header />
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Some Error Occurred, Account Deactivation Failed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Redirecting to the profile.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk} variant="contained" color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
