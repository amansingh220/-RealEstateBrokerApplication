import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "./logo.svg"
import store from "./redux/Store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAllCustomers from "./components/ListAllCustomers";
import ViewCustomer from "./components/ViewCustomer";
import AddCustomer from "./components/AddCustomer";
import RemoveCustomer from "./components/RemoveCustomer";
import EditCustomer from "./components/EditCustomer";
import Home from "./components/Home";
import ConfirmBoxForRemove from "./components/ConfirmBoxForRemove";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/" exact component = {Home}></Route>
            <Route path = "/customers" component = {ListAllCustomers}></Route>
            <Route path = "/register" component = {AddCustomer}></Route>
            <Route path = "/profile" component = {ViewCustomer}></Route>
            <Route path = "/update" component = {EditCustomer}></Route>
            <Route path = "/deactivate" component = {RemoveCustomer}></Route>
            <Route path = "/confirm" component = {ConfirmBoxForRemove}></Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
