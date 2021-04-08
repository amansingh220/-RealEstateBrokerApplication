import { render } from '@testing-library/react';
import React ,{useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { updateBroker } from '../redux/Index'

function EditBroker () {

    return(
        null
    )
}
const mapStateToProps = state => {
    return {
      brokerData: state.updatedBrokerDetails
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      updateBroker: (broker, broId) => dispatch(updateBroker(broker, broId))
      
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditBroker)
  