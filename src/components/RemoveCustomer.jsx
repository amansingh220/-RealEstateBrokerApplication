import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteCustomer } from "../redux/Index";
import Header from "./Header";
import Header2 from "./Header2";
import AccountDeactivated from "./AccountDeactivated";
import AccountDeactivationFailed from "./AccountDeactivationFailed";
import LoadingScreen from "./LoadingScreen";

// EditCustomer functional component is used to Deactivate account of an customer.
function DeleteCustomer({ customerData, deleteCustomer, ...props }) {
  let loggedCustomer = JSON.parse(sessionStorage.getItem("token"));

  // Below implemented function is used to call deleteCustomer function to dispatch an action.
  useEffect(() => {
    let custId = loggedCustomer.custId;
    deleteCustomer(custId);
  }, []);

  return customerData.loading ? (
    <div>
      <LoadingScreen />
    </div>
  ) : customerData.error ? (
    <React.Fragment>
      <Header />
      <AccountDeactivationFailed />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header2 />
      <AccountDeactivated />
    </React.Fragment>
  );
}

// Below function is used to map state to props.
const mapStateToProps = (state) => {
  return {
    customerData: state.deletedCustomerDetails,
  };
};

// Below function is used to map dispatcher to props.
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCustomer: (custId) => dispatch(deleteCustomer(custId)),
  };
};

// Exporting the DeleteCustomer component after connecting it to the redux-store using connect function from react-redux.
export default connect(mapStateToProps, mapDispatchToProps)(DeleteCustomer);
