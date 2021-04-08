import React ,{useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { updateCustomer } from '../redux/Index'
import '../stylesheets/profile.css'
import profile from'../images/profilepicture.jpg'
import Header from './Header'
import Button from '@material-ui/core/Button';

function EditCustomer ({updatedCustomerDetails, updateCustomer, ...props}) {

  let customerData = JSON.parse(localStorage.getItem("customer"));
  let customerDetails = {custName: customerData.custName, email: customerData.email, mobile: customerData.mobile, password: customerData.password, city: customerData.city}
  
  let [custNameError, setCustNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [cityError, setCityError] = useState("");

  let [customer,setCustomer]=useState(customerDetails)
  let [submit,setSubmit]=useState(customerDetails)
  
  useEffect(() => {
    let custId = customerData.custId;
    const checkBox = document.getElementById("confirm");
    if(custNameError === "" && emailError === "" && mobileError === "" && passwordError === "" && cityError === "" && checkBox.checked) {
      updateCustomer(customer, custId);
      handleSaveEvent();
    }
  }, [submit])

  function handleSubmit(event)
  {
      event.preventDefault();
      validateFormData();
      setSubmit(customerDetails);
  }

  function handleCancelEvent() {
    props.history.push({
      pathname: '/profile'
    });
  }

  function handleSaveEvent() {
     props.history.push({
      pathname: '/profile'
    });
  }

  function validateFormData() {
    const custNameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^(0|91)?[789]\d{9}$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!cityRegex.test(customer.city)) {
      setCityError("City name should only contains alphabets.")
      document.getElementById('city').focus();
      document.getElementById("city").style.borderColor = "red";
    } else {
      setCityError("")
      document.getElementById("city").style.borderColor = "";
    }

    if(!passwordRegex.test(customer.password)) {
      setPasswordError("Password should contains a uppercase, a lowercase character and a number.")
      document.getElementById('password').focus();
      document.getElementById("password").style.borderColor = "red";
    } else {
      setPasswordError("")
      document.getElementById("password").style.borderColor = "";
    }

    if(!mobileRegex.test(customer.mobile)) {
      setMobileError("Please enter a valid mobile number.")
      document.getElementById('mobile').focus();
      document.getElementById("mobile").style.borderColor = "red";
    } else {
      setMobileError("")
      document.getElementById("mobile").style.borderColor = "";
    }

    if(!emailRegex.test(customer.email)) {
   
    setEmailError("Please enter a valid email address.")
      document.getElementById('email').focus();
      document.getElementById("email").style.borderColor = "red";
    } else {
      setEmailError("") 
      document.getElementById("email").style.borderColor = "";
    }

    if(!custNameRegex.test(customer.custName)) {
      setCustNameError("Name should only contains alphabets.")
      document.getElementById('custName').focus();
      document.getElementById("custName").style.borderColor = "red";
    } else {
      setCustNameError("")
      document.getElementById("custName").style.borderColor = "";
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <div Class="ProfileBodyCss">
        <div class="container rounded bg-white mt-5">
          <div class="row">
            <div class="col-md-4 border-right">
              <div class="d-flex flex-column align-items-center text-center p-4 mt-1 py-1 imgwrapper"><img class="img-responsive" src={profile} width="220" height="380"/></div>
            </div>
            <div class="col-md-8">
              <div class="py-4">  
              <form onSubmit={handleSubmit} className = 'register-form'>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">UserId
                    <input type="text" disabled = "true" className="form-control" value={customerData.userId}/>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">CustomerId
                    <input type="text" disabled = "true" class="form-control" value={customerData.custId}/>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">Name
                    <input id = 'custName' required='true' value={customer.custName}  onChange={(e) => setCustomer({ ...customer, custName: e.target.value })} type = 'text' className = 'form-control' placeholder = "Name"></input>
                    <p className='text-left text-danger ml-1'>{custNameError}</p>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Email Address
                    <input id = 'email' required='true' value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} type = 'text' className = 'form-control' placeholder = "Email"></input>
                    <p className='text-left text-danger ml-1'>{emailError}</p>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">City
                    <input id = 'city' required='true' value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} type = 'text' className = 'form-control' placeholder = "City"></input>
                    <p className='text-left text-danger ml-1'>{cityError}</p>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Mobile Number
                    <input id = 'mobile' required='true' value={customer.mobile} onChange={(e) => setCustomer({ ...customer, mobile: e.target.value })} type = 'text' className = 'form-control' placeholder = "Mobile Number"></input>
                    <p className='text-left text-danger ml-1'>{mobileError}</p>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p className = "text-left">Role
                    <input type="text" disabled = "true" class="form-control" value={customerData.role}/>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p className = "text-left">Password
                    <input id = 'password' required='true' value={customer.password} onChange={(e) => setCustomer({ ...customer, password: e.target.value })} type = 'text' className = 'form-control' placeholder = "Password"></input>
                    <p className='text-left text-danger ml-1'>{passwordError}</p>
                    </p>
                  </div>
                </div>  
                <div class="pretty p-image p-plain float-left mt-3 mr-2">
                  <input id='confirm' type="checkbox" className="float-right"/>
                  <div class="state">
                    <img class="image" src="https://png.pngtree.com/png-vector/20210319/ourmid/pngtree-checkmark-vector-icon-in-flat-style-png-image_3094466.jpg"/>
                    <label>Check this box to confirm the details</label>
                  </div>
                </div>
                <Button className="float-right ml-3 mt-1" onClick={()=>handleCancelEvent()} variant="contained" color="secondary" style={{backgroundColor: "#d13333", textTransform: 'none'}}>Cancel</Button>
                <Button className="float-right mt-1" onClick={(event)=>handleSubmit(event)} variant="contained" color="secondary" style={{backgroundColor: "#2b9134", textTransform: 'none'}}>Save Details</Button>
                {/* <h6>{JSON.stringify(props.history.location.viewedCustomerDetails.custId)}</h6> */}
              </form>
              </div>
            </div>
          </div>
        </div> 
      </div> 
      {/* <div className='container text-info mt-3'>
      <h5>Name : {customer.custName}</h5>
      <h5>Mobile : {customer.mobile}</h5>
      <h5>Email : {customer.email}</h5>
      <h5>Password : {customer.password}</h5>
      <h5>City: {customer.city}</h5>
    </div> */}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    updatedCustomerDetails: state.updatedCustomerDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCustomer: (customer, custId) => dispatch(updateCustomer(customer, custId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomer)