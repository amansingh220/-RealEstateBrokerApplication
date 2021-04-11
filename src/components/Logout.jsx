import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Header from "./Header";
import { removeUserSession } from "../Utils/Common";

export default function ConfirmBox(props) {
  const [open, setOpen] = React.useState(true);
  let loggedUser = JSON.parse(sessionStorage.getItem("token"));
  let profilePath =
    loggedUser.broId === undefined ? "/profile" : "/broker_profile";

  const handleLogOut = () => {
    setOpen(false);
    removeUserSession();
    props.history.push("/login");
  };

  const handleCancel = () => {
    setOpen(false);
    props.history.push({
      pathname: profilePath,
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
            {"Log Out of RealEstateBroker ?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleLogOut} variant="contained" color="primary">
              Log Out
            </Button>
            <Button
              onClick={handleCancel}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
