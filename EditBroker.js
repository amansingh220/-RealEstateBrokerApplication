import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateBroker } from '../redux/Index'

function EditBroker ({ brokerData, updateBroker}) {
  
  useEffect(() => {

    //take the below input from the user by using form.
    let broId = 184;
    let broker = {
        broName: "Anjani",
        password: "Abcdefghijsksk5",
        mobile: "9999888877",
        email: "anjanimehta99@gmail.com",
        city : "Mathura"
    }

    updateBroker(broker, broId)
  }, [])

  
  return brokerData.loading ? (
    <h2>Loading</h2>
  ) : brokerData.error ? (
    <h4 className='text-danger mt-3'>Test  : {brokerData.error}</h4>
  ) : (
    <div>
        <h4 className = 'text-success mt-3'>Test  Successful</h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    brokerData: state.updatedbrokerDetails
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
