import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBroker } from "../redux/Index";
import "../stylesheets/profile.css";
import profile from "../images/profilepictureofbroker2.jpg";
import RedirectToDashboard from "./RedirectToDashboard";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

function ViewBroker({ brokerData, fetchBroker, ...props }) {
  let loggedBroker = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    let broId = loggedBroker.broId;
    fetchBroker(broId);
  }, []);

  function handleEditClick() {
    localStorage.setItem("broker", JSON.stringify(brokerData.broker));
    props.history.push({
      pathname: "/update_broker",
    });
  }

  function handleDeactivateClick() {
    props.history.push({
      pathname: "/confirm",
    });
  }

  function handleLogOutClick() {
    props.history.push({
      pathname: "/logout",
    });
  }

  function handleViewPropertyClick() {
    if (brokerData.broker.properties.length !== 0) {
      props.history.push({
        pathname: "/broker_properties",
      });
    } else {
      props.history.push({
        pathname: "/no_property_bought",
      });
    }
  }

  return brokerData.loading ? (
    <div>
      <LoadingScreen />
    </div>
  ) : brokerData.error ? (
    <React.Fragment>
      <Header />
      <RedirectToDashboard />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header />
      <div Class="ProfileBodyCss mt-4">
        <div class="container rounded bg-white container-fluid">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="img-fluid" src={profile} width="250" height="100" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="p-3 py-5">
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p className="text-left">
                      UserId
                      <input
                        type="text"
                        disabled="true"
                        className="form-control"
                        value={brokerData.broker.userId}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      CustomerId
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={brokerData.broker.broId}
                      />
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <p className="text-left">
                      Name
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={brokerData.broker.broName}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      Email Address
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={brokerData.broker.email}
                      />
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <p className="text-left">
                      City
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={brokerData.broker.city}
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
                        value={brokerData.broker.mobile}
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
                        value={brokerData.broker.role}
                      />
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className="text-left">
                      Password
                      <input
                        type="text"
                        disabled="true"
                        class="form-control"
                        value={brokerData.broker.password}
                      />
                    </p>
                  </div>
                </div>
                <Button
                  className="float-right mt-2 mr-2"
                  onClick={() => handleDeactivateClick()}
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#d13333", textTransform: "none" }}
                >
                  Deactivate Account
                </Button>
                <Button
                  className="float-left mt-2 mr-2"
                  onClick={() => handleEditClick()}
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#236aad", textTransform: "none" }}
                >
                  Edit Details
                </Button>
                <Button
                  className="float-left mt-2 mr-2"
                  onClick={() => handleViewPropertyClick()}
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#2b9134", textTransform: "none" }}
                >
                  View Your Properties
                </Button>
                <Button
                  className="float-right mt-2 mr-2"
                  onClick={() => handleLogOutClick()}
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#ca862c", textTransform: "none" }}
                >
                  Logout
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

const mapStateToProps = (state) => {
  return {
    brokerData: state.brokerDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBroker: (broId) => dispatch(fetchBroker(broId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBroker);
