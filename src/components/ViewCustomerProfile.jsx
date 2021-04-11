import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCustomer } from "../redux/Index";
import "../stylesheets/profile.css";
import profile from "../images/profile-unknown3.jpg";
import RedirectToDashboard from "./RedirectToDashboard";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

// ViewCustomerProfile component is used to view details of an listed customer to other customers.
function ViewCustomerProfile({ customerData, fetchCustomer, ...props }) {
  useEffect(() => {
    let custId = localStorage.getItem("custId1");
    fetchCustomer(custId);
  }, []);

  // Handles the event fired when customer presses Go Back button.
  function handleGoBack() {
    props.history.push({
      pathname: "/customers",
    });
  }

  return customerData.loading ? (
    <div>
      <LoadingScreen />
    </div>
  ) : customerData.error ? (
    <React.Fragment>
      <Header />
      <RedirectToDashboard />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header />
      <div Class="ProfileBodyCss mt-5">
        <div class="container rounded bg-white mt-4">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-1">
                <img class="img-fluid" src={profile} width="220" height="360" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="p-3 py-5">
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p className="text-left">
                      CustomerId
                      <input
                        type="text"
                        disabled="true"
                        className="form-control"
                        value={customerData.customer.custId}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      Name
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={customerData.customer.custName}
                      />
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <p className="text-left">
                      Email Address
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={customerData.customer.email}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      Mobile Number
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={customerData.customer.mobile}
                      />
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <p className="text-left">
                      Role
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={customerData.customer.role}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      City
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={customerData.customer.city}
                      />
                    </p>
                  </div>
                </div>
                <Button
                  className="float-right mt-5"
                  onClick={() => handleGoBack()}
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#d13333", textTransform: "none" }}
                >
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

// Below function is used to map state to props.
const mapStateToProps = (state) => {
  return {
    customerData: state.customerDetails,
  };
};

// Below function is used to map dispatcher to props.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomer: (custId) => dispatch(fetchCustomer(custId)),
  };
};

// Exporting the ViewCustomerProfile component after connecting it to the redux-store using connect function from react-redux.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCustomerProfile);
