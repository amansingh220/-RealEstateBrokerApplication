import { combineReducers } from "redux";
import reducerForFetchAllCustomers from "./customer/customer_reducers/FetchAllCustomersReducer";
import reducerForFetchCustomer from "./customer/customer_reducers/FetchCustomerReducer";
import reducerForInsertCustomer from "./customer/customer_reducers/InsertCustomerReducer";
import reducerForDeleteCustomer from "./customer/customer_reducers/DeleteCustomerReducer";
import reducerForUpdateCustomer from "./customer/customer_reducers/UpdateCustomerReducer";
import reducerforUpdateDealData from "./deal/deal_reducers/updateDealReducer";

const rootReducer = combineReducers({
  customers: reducerForFetchAllCustomers,
  customerDetails: reducerForFetchCustomer,
  addedCustomerDetails: reducerForInsertCustomer,
  deletedCustomerDetails: reducerForDeleteCustomer,
  updatedCustomerDetails: reducerForUpdateCustomer,
  DealData: reducerforUpdateDealData,
});

export default rootReducer;
