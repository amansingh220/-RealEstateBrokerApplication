import React ,{useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { updateBroker } from '../redux/Index'
import '../stylesheets/profile.css'
import profile from'../images/profilepictureofbroker2.jpg'
import Header from './Header'
import Button from '@material-ui/core/Button';
import Footer from './Footer'

function EditBroker ({updatedBrokerDetails, updateBroker, ...props}) {

  let brokerData = JSON.parse(localStorage.getItem("broker"));
  let brokerDetails = {broName: brokerData.broName, email: brokerData.email, mobile: brokerData.mobile, password: brokerData.password, city: brokerData.city}
  
  let [broNameError, setBroNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [cityError, setCityError] = useState("");

  let [broker,setBroker]=useState(brokerDetails)
  let [submit,setSubmit]=useState(brokerDetails)
  
  useEffect(() => {
    let broId = brokerData.broId;
    const checkBox = document.getElementById("confirm");
    if(broNameError === "" && emailError === "" && mobileError === "" && passwordError === "" && cityError === "" && checkBox.checked) {
      updateBroker(broker, broId);
      handleSaveEvent();
    }
  }, [submit])

  function handleSubmit(event) {
      event.preventDefault();
      validateFormData();
      setSubmit(brokerDetails);
  }

  function handleCancelEvent() {
    props.history.push({
      pathname: '/broker_profile'
    });
  }

  function handleSaveEvent() {
     props.history.push({
      pathname: '/broker_profile'
    });
  }

  function validateFormData() {
    const broNameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^(0|91)?[789]\d{9}$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!cityRegex.test(broker.city)) {
      setCityError("City name should only contains alphabets.")
      document.getElementById('city1').focus();
      document.getElementById("city1").style.borderColor = "red";
    } else {
      setCityError("")
      document.getElementById("city1").style.borderColor = "";
    }

    if(!passwordRegex.test(broker.password)) {
      setPasswordError("Password should contains a uppercase, a lowercase character and a number.")
      document.getElementById('password1').focus();
      document.getElementById("password1").style.borderColor = "red";
    } else {
      setPasswordError("")
      document.getElementById("password1").style.borderColor = "";
    }

    if(!mobileRegex.test(broker.mobile)) {
      setMobileError("Please enter a valid mobile number.")
      document.getElementById('mobile1').focus();
      document.getElementById("mobile1").style.borderColor = "red";
    } else {
      setMobileError("")
      document.getElementById("mobile1").style.borderColor = "";
    }

    if(!emailRegex.test(broker.email)) {
   
    setEmailError("Please enter a valid email address.")
      document.getElementById('email1').focus();
      document.getElementById("email1").style.borderColor = "red";
    } else {
      setEmailError("") 
      document.getElementById("email1").style.borderColor = "";
    }

    if(!broNameRegex.test(broker.broName)) {
      setBroNameError("Name should only contains alphabets.")
      document.getElementById('broName1').focus();
      document.getElementById("broName1").style.borderColor = "red";
    } else {
      setBroNameError("")
      document.getElementById("broName1").style.borderColor = "";
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <div Class="ProfileBodyCss">
        <div class="container bg-white mt-5">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-4 mt-1 py-1 imgwrapper"><img class="img-fluid" src={profile} width="242" height="100"/></div>
            </div>
            <div class="col-md-8">
              <div class="py-4">  
              <form onSubmit={handleSubmit} className = 'register-form'>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">UserId
                    <input id = "userId" type="text" disabled = "true" className="form-control" value={brokerData.userId}/>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">BrokerId
                    <input id="broId" type="text" disabled = "true" class="form-control" value={brokerData.broId}/>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">Name
                    <input id = 'broName1' required='true' value={broker.broName}  onChange={(e) => setBroker({ ...broker, broName: e.target.value })} type = 'text' className = 'form-control' placeholder = "Name"></input>
                    <p className='text-left text-danger ml-1'>{broNameError}</p>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Email Address
                    <input id = 'email1' required='true' value={broker.email} onChange={(e) => setBroker({ ...broker, email: e.target.value })} type = 'text' className = 'form-control' placeholder = "Email"></input>
                    <p className='text-left text-danger ml-1'>{emailError}</p>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">City
                    <input id = 'city1' required='true' value={broker.city} onChange={(e) => setBroker({ ...broker, city: e.target.value })} type = 'text' className = 'form-control' placeholder = "City"></input>
                    <p className='text-left text-danger ml-1'>{cityError}</p>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Mobile Number
                    <input id = 'mobile1' required='true' value={broker.mobile} onChange={(e) => setBroker({ ...broker, mobile: e.target.value })} type = 'text' className = 'form-control' placeholder = "Mobile Number"></input>
                    <p className='text-left text-danger ml-1'>{mobileError}</p>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">Role
                    <input id="role" type="text" disabled = "true" class="form-control" value={brokerData.role}/>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Password
                    <input id = 'password1' required='true' value={broker.password} onChange={(e) => setBroker({ ...broker, password: e.target.value })} type = 'text' className = 'form-control' placeholder = "Password"></input>
                    <p className='text-left text-danger ml-1'>{passwordError}</p>
                    </p>
                  </div>
                </div>  
                <div class="pretty p-image p-plain float-left mt-4 mr-2">
                  <input id='confirm' type="checkbox" className="float-right"/>
                  <div class="state">
                    <img src="https://png.pngtree.com/png-vector/20210319/ourmid/pngtree-checkmark-vector-icon-in-flat-style-png-image_3094466.jpg"/>
                    <label>Check this box to confirm the details</label>
                  </div>
                </div>
                <Button className="float-right ml-3 mt-3" onClick={()=>handleCancelEvent()} variant="contained" color="secondary" style={{backgroundColor: "#d13333", textTransform: 'none'}}>Cancel</Button>
                <Button className="float-right mt-3" onClick={(event)=>handleSubmit(event)} variant="contained" color="secondary" style={{backgroundColor: "#2b9134", textTransform: 'none'}}>Save Details</Button>
              </form>
              </div>
            </div>
          </div>
        </div> 
      </div> 
      <Footer/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    updatedBrokerDetails: state.updatedBrokerDetails
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