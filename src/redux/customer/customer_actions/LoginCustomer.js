import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../customer_action_types/CustomerActionTypes'

export const login = (user) => {
  return (dispatch)=>  {
    dispatch(loginRequest(user))
    axios
      .post(`http://localhost:9000/rba/login`,user)
      .then(response => {
        // response.data is the customers
        const user = response.data
        dispatch(loginSuccess(user))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(loginFailure(error.message))
      })
  }
}

//Action Creator
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

//Action Creator
export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

//Action Creator
export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}