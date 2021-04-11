import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import LoadingScreen from "./LoadingScreen";
import Header2 from "./Header2";
import Header from "./Header";

function ConfirmBox(props) {
  const [open, setOpen] = React.useState(true);
  let history = useHistory();

  localStorage.setItem("token", JSON.stringify(props.userData.user));
  sessionStorage.setItem("token", JSON.stringify(props.userData.user));

  const handleLoginSuccess = () => {
    setOpen(false);
    history.push({
      pathname: "/dashboard",
    });
  };

  const handleLoginFailed = () => {
    setOpen(false);
    history.push({
      pathname: "/login",
    });
  };

  return props.userData.loading ? (
    <React.Fragment>
      <Header2/>
      <LoadingScreen/>
    </React.Fragment>
  ) : props.userData.error ? (
    <div>
      <Header2/>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login Failed."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.userData.error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLoginFailed}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  ) : (
    <div>
      <Header/>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login Successful."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Have a good day.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLoginSuccess}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userDetails,
  };
};

export default connect(mapStateToProps, null)(ConfirmBox);
