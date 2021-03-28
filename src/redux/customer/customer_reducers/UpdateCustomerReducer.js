import {
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_FAILURE,
  } from '../customer_action_types/CustomerActionTypes'
  
  const initialState = {
    loading: false,
    customer: [],
    error: ''
  }
  
  const reducerForUpdateCustomer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CUSTOMER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case UPDATE_CUSTOMER_SUCCESS:
        return {
          loading: false,
          customer: action.payload,
          error: ''
        }
      case UPDATE_CUSTOMER_FAILURE:
        return {
          loading: false,
          customer: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default reducerForUpdateCustomer

  