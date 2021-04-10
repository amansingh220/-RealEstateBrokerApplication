import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "./logo.svg";
import store from "./redux/Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListAllCustomers from "./components/ListAllCustomers";
import ViewCustomer from "./components/ViewCustomer";
import AddCustomer from "./components/AddCustomer";
import RemoveCustomer from "./components/RemoveCustomer";
import EditCustomer from "./components/EditCustomer";
import Home from "./components/Home";
import ConfirmBoxForRemove from "./components/ConfirmBoxForRemove";
import Footer from "./components/Footer";
import DashBoard from "./components/DashBoard";
import SignUp_SignIn from "./components/SignUp_SignIn";
import Login from "./components/Login";
import ListAllDeals from "./components/ListAllDeals";
import AddDeal from "./components/AddDeal";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={AddCustomer}></Route>
              <Route path="/customers" component={ListAllCustomers}></Route>
              <Route path="/register" component={AddCustomer}></Route>
              <Route path="/profile" component={ViewCustomer}></Route>
              <Route path="/update" component={EditCustomer}></Route>
              <Route path="/deactivate" component={RemoveCustomer}></Route>
              <Route path="/confirm" component={ConfirmBoxForRemove}></Route>
              <Route path="/dashboard" component={DashBoard}></Route>
              <Route path="/signup_signin" component={SignUp_SignIn}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/allDeals" component={ListAllDeals}></Route>
              <Route path="/addDeals" component={AddDeal}></Route>
            </Switch>
          </div>
        </Router>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;
