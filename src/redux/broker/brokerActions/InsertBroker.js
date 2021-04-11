import axios from 'axios'
import {
    
    INSERT_BROKER_SUCCESS,
    INSERT_BROKER_FAILURE,
    INSERT_BROKER_REQUEST,
    
} from '../brokerTypes/brokerActionTypes'

export const insertBroker = (broker) => {
    return (dispatch) => {
        alert(JSON.stringify(broker))
        dispatch(insertBrokerRequest(broker))
        axios
        .post(`http://localhost:9000/rba/addbroker`,broker)
        .then(response => {
            const broker = response.data
            dispatch(insertBrokerSuccess(broker))
        })
        .catch(error => {
            dispatch(insertBrokerFailure(error.response.data))
        })
    }
}

//Action Creator
export const insertBrokerRequest = () =>{
    return{
        type : INSERT_BROKER_REQUEST
    }
}

//Action Creator
export const insertBrokerSuccess = broker =>{
    return{
        type : INSERT_BROKER_SUCCESS,       
        payload : broker
    }
}

//Action Creator
export const insertBrokerFailure = error =>{
    return{
        type : INSERT_BROKER_FAILURE,
        payload : error
    }
}