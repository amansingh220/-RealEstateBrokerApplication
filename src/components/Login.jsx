import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/Index";
import "../stylesheets/login1.css";
import Footer2 from "./Footer2";
import Header2 from "./Header2";
import LoadingScreen from "./LoadingScreen";

function Login({ userData, login, ...props }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let credential = { password: "", email: "" };
  let [user, setCustomer] = useState(credential);
  let [submit, setSubmit] = useState(credential);
  let [emailError, setEmailError] = useState("");

  function validateFormData() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(user.email)) {
      setEmailError("Please enter a valid email address.");
      document.getElementById("email2").focus();
      document.getElementById("email2").style.borderColor = "red";
    } else {
      setEmailError("");
      document.getElementById("email2").style.borderColor = "";
    }
  }
  function handleSubmit(event) {
    validateFormData();
    setError(null);
    setLoading(true);
    event.preventDefault();
    setSubmit(credential);
  }

  useEffect(() => {
    const checkbox = document.getElementById("cbx");
    if (checkbox.checked && emailError === "") {
      login(user);

      props.history.push("/login_process");
    }
  }, [submit]);

  return (
    <div>
      <Header2 />
      <div className="loginbody mt-5">
        <div className="form-Bg">
          <div className="form-header">
            <h2>Sign in</h2>
            <p>Sign in and start managing your candidates</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="email2"
                required="true"
                onChange={(e) =>
                  setCustomer({ ...user, email: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Email"
                required="required"
              />{" "}
              <p className="text-left text-danger ml-1">{emailError}</p>
            </div>
            <div className="form-group">
              <input
                id="password2"
                onChange={(e) =>
                  setCustomer({ ...user, password: e.target.value })
                }
                className="form-control"
                type="password"
                placeholder="password"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="cbx"
                class="inp-cbx"
                style={{ display: "none" }}
              />
              <label className="cbx" htmlFor="cbx">
                <span>
                  <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>Remember me</span>
              </label>
              <a href="#" className="form-recovery">
                Forget password
              </a>
            </div>

            <div id="loginButton" className="form-group">
              <button>Log In</button>
            </div>
          </form>
        </div>

        <div className="animation-area">
          <ul className="box-area">
            <li className="fa fa-plus"></li>
            <li></li>
            <li className="fa fa-plus"></li>
            <li></li>
            <li className="fa fa-plus"></li>
            <li></li>
            <li className="fa fa-plus"></li>
            <li></li>
            <li className="fa fa-plus"></li>
            <li></li>
          </ul>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
