import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateCustomer } from "../redux/Index";
import "../stylesheets/profile.css";
import profile from "../images/profilepictureofbroker1.jpg";
import Header from "./Header.jsx";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

// EditCustomer functional component is used to take to data from the customer at the time of updation.
function EditCustomer({ updatedCustomerDetails, updateCustomer, ...props }) {
  let customerData = JSON.parse(localStorage.getItem("customer"));

   // Setting up the initial values of customer properties.
  let customerDetails = {
    custName: customerData.custName,
    email: customerData.email,
    mobile: customerData.mobile,
    password: customerData.password,
    city: customerData.city,
  };

  let [custNameError, setCustNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [cityError, setCityError] = useState("");

  let [customer, setCustomer] = useState(customerDetails);
  let [submit, setSubmit] = useState(customerDetails);

  // Below implemented function is used to call updateCustomer function to dispatch an action.
  useEffect(() => {
    let custId = customerData.custId;
    const checkBox = document.getElementById("confirm");
    if (
      custNameError === "" &&
      emailError === "" &&
      mobileError === "" &&
      passwordError === "" &&
      cityError === "" &&
      checkBox.checked
    ) {
      updateCustomer(customer, custId);
      handleSaveEvent();
    }
  }, [submit]);

  // Handles the event fired when customer submits the form button.
  function handleSubmit(event) {
    event.preventDefault();
    validateFormData();
    setSubmit(customerDetails);
  }

  // Handles the event fired when customer presses cancel button.
  function handleCancelEvent() {
    props.history.push({
      pathname: "/profile",
    });
  }

  // Handles the event fired when customer presses save button.
  function handleSaveEvent() {
    props.history.push({
      pathname: "/profile",
    });
  }

  // Below implemented function is used to validate the data that is entered by the customer.
  function validateFormData() {
    const custNameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^(0|91)?[789]\d{9}$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!cityRegex.test(customer.city)) {
      setCityError("City name should only contains alphabets.");
      document.getElementById("city1").focus();
      document.getElementById("city1").style.borderColor = "red";
    } else {
      setCityError("");
      document.getElementById("city1").style.borderColor = "";
    }

    if (!passwordRegex.test(customer.password)) {
      setPasswordError(
        "Password should contains a uppercase, a lowercase character and a number."
      );
      document.getElementById("password1").focus();
      document.getElementById("password1").style.borderColor = "red";
    } else {
      setPasswordError("");
      document.getElementById("password1").style.borderColor = "";
    }

    if (!mobileRegex.test(customer.mobile)) {
      setMobileError("Please enter a valid mobile number.");
      document.getElementById("mobile1").focus();
      document.getElementById("mobile1").style.borderColor = "red";
    } else {
      setMobileError("");
      document.getElementById("mobile1").style.borderColor = "";
    }

    if (!emailRegex.test(customer.email)) {
      setEmailError("Please enter a valid email address.");
      document.getElementById("email1").focus();
      document.getElementById("email1").style.borderColor = "red";
    } else {
      setEmailError("");
      document.getElementById("email1").style.borderColor = "";
    }

    if (!custNameRegex.test(customer.custName)) {
      setCustNameError("Name should only contains alphabets.");
      document.getElementById("custName1").focus();
      document.getElementById("custName1").style.borderColor = "red";
    } else {
      setCustNameError("");
      document.getElementById("custName1").style.borderColor = "";
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div Class="ProfileBodyCss">
        <div class="container bg-white mt-5">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-4 mt-1 py-1 imgwrapper">
                <img class="img-fluid" src={profile} width="500" height="100" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="py-4">
                <form onSubmit={handleSubmit} className="register-form">
                  <div class="row">
                    <div class="col-md-6">
                      <p className="text-left">
                        UserId
                        <input
                          id="userId"
                          type="text"
                          disabled="true"
                          className="form-control"
                          value={customerData.userId}
                        />
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p className="text-left">
                        CustomerId
                        <input
                          id="custId"
                          type="text"
                          disabled="true"
                          class="form-control"
                          value={customerData.custId}
                        />
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <p className="text-left">
                        Name
                        <input
                          id="custName1"
                          required="true"
                          value={customer.custName}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              custName: e.target.value,
                            })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        ></input>
                        <p className="text-left text-danger ml-1">
                          {custNameError}
                        </p>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p className="text-left">
                        Email Address
                        <input
                          id="email1"
                          required="true"
                          value={customer.email}
                          onChange={(e) =>
                            setCustomer({ ...customer, email: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        ></input>
                        <p className="text-left text-danger ml-1">
                          {emailError}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <p className="text-left">
                        City
                        <input
                          id="city1"
                          required="true"
                          value={customer.city}
                          onChange={(e) =>
                            setCustomer({ ...customer, city: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          placeholder="City"
                        ></input>
                        <p className="text-left text-danger ml-1">
                          {cityError}
                        </p>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p className="text-left">
                        Mobile Number
                        <input
                          id="mobile1"
                          required="true"
                          value={customer.mobile}
                          onChange={(e) =>
                            setCustomer({ ...customer, mobile: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number"
                        ></input>
                        <p className="text-left text-danger ml-1">
                          {mobileError}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <p className="text-left">
                        Role
                        <input
                          id="role"
                          type="text"
                          disabled="true"
                          class="form-control"
                          value={customerData.role}
                        />
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p className="text-left">
                        Password
                        <input
                          id="password1"
                          required="true"
                          value={customer.password}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              password: e.target.value,
                            })
                          }
                          type="text"
                          className="form-control"
                          placeholder="Password"
                        ></input>
                        <p className="text-left text-danger ml-1">
                          {passwordError}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div class="pretty p-image p-plain float-left mt-4 mr-2">
                    <input
                      id="confirm"
                      type="checkbox"
                      className="float-right"
                    />
                    <div class="state">
                      <img src="https://png.pngtree.com/png-vector/20210319/ourmid/pngtree-checkmark-vector-icon-in-flat-style-png-image_3094466.jpg" />
                      <label>Check this box to confirm the details</label>
                    </div>
                  </div>
                  <Button
                    className="float-right ml-3 mt-3"
                    onClick={() => handleCancelEvent()}
                    variant="contained"
                    color="secondary"
                    style={{
                      backgroundColor: "#d13333",
                      textTransform: "none",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="float-right mt-3"
                    onClick={(event) => handleSubmit(event)}
                    variant="contained"
                    color="secondary"
                    style={{
                      backgroundColor: "#2b9134",
                      textTransform: "none",
                    }}
                  >
                    Save Details
                  </Button>
                </form>
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
    updatedCustomerDetails: state.updatedCustomerDetails,
  };
};

// Below function is used to map dispatcher to props.
const mapDispatchToProps = (dispatch) => {
  return {
    updateCustomer: (customer, custId) =>
      dispatch(updateCustomer(customer, custId)),
  };
};

// Exporting the EditCustomer component after connecting it to the redux-store using connect function from react-redux.
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);
