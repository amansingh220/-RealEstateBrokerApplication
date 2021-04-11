import {
    
    INSERT_BROKER_SUCCESS,
    INSERT_BROKER_FAILURE,
    INSERT_BROKER_REQUEST,
    
} from '../brokerTypes/brokerActionTypes'

const initialState = {
    loading : false,
    broker :  [],
    error : ''
}

const reducerForInsertBroker = (state = initialState,action) => {
    switch(action.type)
    {
        case INSERT_BROKER_REQUEST :
            return {
                ...state,
                loading: true
            }
        case INSERT_BROKER_SUCCESS :
            return {
                loading: false,
                broker: action.payload,
                error: ''
            }
        case INSERT_BROKER_FAILURE :
            return {
                loading: false,
                broker: [],
                error: action.payload
            }
        default: return state
    }
}
export default reducerForInsertBroker