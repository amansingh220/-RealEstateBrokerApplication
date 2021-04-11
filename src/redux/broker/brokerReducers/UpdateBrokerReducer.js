import {
    UPDATE_BROKER_REQUEST,
    UPDATE_BROKER_SUCCESS,
    UPDATE_BROKER_FAILURE,
  } from '../brokerTypes/brokerActionTypes'
  
  const initialState = {
    loading: false,
    customer: [],
    error: ''
  }
  
  const reducerForUpdateBroker = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_BROKER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case UPDATE_BROKER_SUCCESS:
        return {
          loading: false,
          broker: action.payload,
          error: ''
        }
      case UPDATE_BROKER_FAILURE:
        return {
          loading: false,
          broker: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default reducerForUpdateBroker

  