import {
    FETCH_BROKER_REQUEST,
    FETCH_BROKER_SUCCESS,
    FETCH_BROKER_FAILURE,
  } from '../brokerTypes/brokerActionTypes'

  const initialState = {
      loading  : false,
      broker : [],
      error : ''

  }

  const reducerForFetchBroker = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BROKER_REQUEST:
          return {
            ...state,
            loading: true
          }
        case FETCH_BROKER_SUCCESS:
          return {
            loading: false,
            broker: action.payload,
            error: ''
          }
        case FETCH_BROKER_FAILURE:
          return {
            loading: false,
            broker: [],
            error: action.payload
          }
        default: return state
      }
  }
   
  export default reducerForFetchBroker