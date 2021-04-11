import {
    FETCH_BROKERS_REQUEST,
    FETCH_BROKERS_SUCCESS,
    FETCH_BROKERS_FAILURE,
  } from '../brokerTypes/brokerActionTypes'

  const initialState = {
      loading  : false,
      broker : [],
      error : ''

  }

  const reducerForFetchAllBroker = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BROKERS_REQUEST:
          return {
            ...state,
            loading: true
          }
        case FETCH_BROKERS_SUCCESS:
          return {
            loading: false,
            broker: action.payload,
            error: ''
          }
        case FETCH_BROKERS_FAILURE:
          return {
            loading: false,
            broker: [],
            error: action.payload
          }
        default: return state
      }
  }
   
  export default reducerForFetchAllBroker