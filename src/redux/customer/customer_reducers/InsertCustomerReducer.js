import {
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
  INSERT_CUSTOMER_FAILURE,
  } from '../customer_action_types/CustomerActionTypes'
  
  const initialState = {
    loading: false,
    customer: [],
    error: ''
  }
  
  const reducerForInsertCustomer = (state = initialState, action) => {
    switch (action.type) {
      case INSERT_CUSTOMER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case INSERT_CUSTOMER_SUCCESS:
        return {
          loading: false,
          customer: action.payload,
          error: ''
        }
      case INSERT_CUSTOMER_FAILURE:
        return {
          loading: false,
          customer: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default reducerForInsertCustomer

  