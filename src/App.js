import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/Store";
import ListAllCustomers from "./components/ListAllCustomers";
import ViewCustomer from "./components/ViewCustomer";
import AddCustomer from "./components/AddCustomer";
import RemoveCustomer from "./components/RemoveCustomer";
import EditCustomer from "./components/EditCustomer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ViewCustomer/>
      </div>
    </Provider>
  );
}

export default App;
