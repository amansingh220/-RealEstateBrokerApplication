import{
    DELETE_BROKER_REQUEST,
    DELETE_BROKER_SUCCESS,
    DELETE_BROKER_FAILURE,
  } from '../brokerTypes/brokerActionTypes'

  const initialState = {
    loading  : false,
    broker : [],
    error : ''

}
const reducerForDeleteBroker = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BROKER_REQUEST:
          return {
            ...state,
            loading: true
          }
        case DELETE_BROKER_SUCCESS:
          return {
            loading: false,
            broker: action.payload,
            error: ''
          }
        case DELETE_BROKER_FAILURE:
          return {
            loading: false,
            broker: [],
            error: action.payload
          }
        default: return state
      }
  }
   
  export default reducerForDeleteBroker
