import { combineReducers } from 'redux'
import reducerForFetchAllCustomers from './customer/customer_reducers/FetchAllCustomersReducer'
import reducerForFetchCustomer from './customer/customer_reducers/FetchCustomerReducer'
import reducerForInsertCustomer from './customer/customer_reducers/InsertCustomerReducer'
import reducerForDeleteCustomer from './customer/customer_reducers/DeleteCustomerReducer'
import reducerForUpdateCustomer from './customer/customer_reducers/UpdateCustomerReducer'
import reducerForLoginCustomer from './customer/customer_reducers/LoginCustomerReducer'

const rootReducer = combineReducers({ 
  customers : reducerForFetchAllCustomers,
  customerDetails : reducerForFetchCustomer,
  addedCustomerDetails : reducerForInsertCustomer,
  deletedCustomerDetails : reducerForDeleteCustomer,
  updatedCustomerDetails : reducerForUpdateCustomer,
  userDetails : reducerForLoginCustomer
})

export default rootReducer
