import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router";
import Header from "./Header";

// NoPropertyBought component is used to show an message to the customer in form of an alert box that he has not any property yet.
export default function NoPropertyBought() {
  const [open, setOpen] = React.useState(true);
  let history = useHistory();
  let loggedUser = JSON.parse(sessionStorage.getItem("token"));
  let profilePath =
    loggedUser.broId === undefined ? "/profile" : "/broker_profile";

  // Handles the event fired when customer presses Ok button.
  const handleOk = () => {
    setOpen(false);
    history.push({
      pathname: profilePath,
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
          {"You have not bought any property yet."}
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
