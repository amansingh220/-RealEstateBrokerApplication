import { combineReducers } from 'redux'
import reducerForFetchAllCustomers from './customer/customer_reducers/FetchAllCustomersReducer'
import reducerForFetchCustomer from './customer/customer_reducers/FetchCustomerReducer'
import reducerForInsertCustomer from './customer/customer_reducers/InsertCustomerReducer'
import reducerForDeleteCustomer from './customer/customer_reducers/DeleteCustomerReducer'
import reducerForUpdateCustomer from './customer/customer_reducers/UpdateCustomerReducer'
import reducerForLoginCustomer from './customer/customer_reducers/LoginCustomerReducer'

import reducerForFetchAllBroker from './broker/brokerReducers/FetchAllBrokerReducer'
import reducerForFetchbroker from './broker/brokerReducers/FetchBrokerReducer'
import reducerForInsertbroker from './broker/brokerReducers/InsertBrokerReducer'
import reducerForDeletebroker from './broker/brokerReducers/DeleteBrokerReducer'
import reducerForUpdatebroker from './broker/brokerReducers/UpdateBrokerReducer'

const rootReducer = combineReducers({ 
  customers : reducerForFetchAllCustomers,
  customerDetails : reducerForFetchCustomer,
  addedCustomerDetails : reducerForInsertCustomer,
  deletedCustomerDetails : reducerForDeleteCustomer,
  updatedCustomerDetails : reducerForUpdateCustomer,
  userDetails : reducerForLoginCustomer,

  brokers : reducerForFetchAllBroker,
  brokerDetails : reducerForFetchbroker,
  addedBrokerDetails : reducerForInsertbroker,
  deletedBrokerDetails : reducerForDeletebroker,
  updatedBrokerDetails : reducerForUpdatebroker
})

export default rootReducer
