import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Header2 from "./Header2";

// SignUp_SignIn functional component is used to present some options to the user for signup or login.
export default function SignUp_SignIn(props) {
  const [open, setOpen] = React.useState(true);

  // Handles the event fired when customer presses LogInAsCustomer button.
  const handleLogInAsCustomer = () => {
    setOpen(false);
    props.history.push({
      pathname: "/login",
    });
  };

  // Handles the event fired when customer presses LogInAsBroker button.
  const handleLogInAsBroker = () => {
    setOpen(false);
    props.history.push({
      pathname: "/login_broker",
    });
  };

  // Handles the event fired when customer presses SignUpAsBroker button.
  const handleSignUpAsBroker = () => {
    setOpen(false);
    props.history.push({
      pathname: "/register_broker",
    });
  };

   // Handles the event fired when customer presses SignUpAsCustomer button.
  const handleSignUpAsCustomer = () => {
    setOpen(false);
    props.history.push({
      pathname: "/register",
    });
  };

  return (
    <div>
      <Header2 />
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Welcome To The RealEstateBroker"}
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handleLogInAsCustomer}
              variant="contained"
              color="primary"
            >
              Login as customer
            </Button>
            <Button
              onClick={handleLogInAsBroker}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2b9134" }}
            >
              Login as broker
            </Button>
            <Button
              onClick={handleSignUpAsCustomer}
              variant="contained"
              color="primary"
            >
              Signup as customer
            </Button>
            <Button
              onClick={handleSignUpAsBroker}
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "#2b9134" }}
            >
              Signup as broker
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
