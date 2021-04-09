import React ,{useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { insertCustomer } from '../redux/Index'
import '../stylesheets/registration.css'
import Header from './Header2';
import icon from'../images/Down Arrow.png'
import Footer2 from './Footer2';

function AddCustomer ({insertCustomer, ...props}) {
  
  let customerDetails = {custName : "", password : "", mobile : "", email : "", city : ""};
  
  let [custNameError, setCustNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [cityError, setCityError] = useState("");

  let [customer,setCustomer]=useState(customerDetails)
  let [submit,setSubmit]=useState(customerDetails)

  useEffect(() => {
    const checkBox = document.getElementById("confirm");
    if(custNameError === "" && emailError === "" && mobileError === "" && passwordError === "" && cityError === "" && checkBox.checked) {
      insertCustomer(customer)
      props.history.push({
        pathname: '/registration_confirmation',
      });
    }
  }, [submit])

  function handleSubmit(event)
  {
      event.preventDefault();
      validateFormData();
      setSubmit(customerDetails) 
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
  <div className = 'registrationBodyCss'>
      <div className = 'row py-4 mt-4 '>
          <div className = 'col-md-10 offset = md-1'>
              <div className = 'row'>
                  <div className = 'col-md-5 register-left'>
                      <img className = 'icon' src={icon}></img>
                      <h3 className='join'>Join Us</h3>
                      <p>Welcome To RealEstateBroker</p>
                      <button type = 'button' className = 'btn btn-primary'>About Us</button>
                  </div>
                  <div className = 'col-md-7 register-right'>
                        <div className='title-box-d'>
                          <h2 className='title-d'>Register Here</h2>
                        </div>
                    <form onSubmit={handleSubmit} className = 'register-form' autoComplete="on">
                        <div className = 'form-group'>
                               <input id = 'custName' required='true'  onChange={(e) => setCustomer({ ...customer, custName: e.target.value })} type = 'text' className = 'form-control' placeholder = "Name"></input>
                               <p className='text-left text-danger ml-1'>{custNameError}</p>
                           </div> 
                           <div className = 'form-group'>
                               <input id = 'email' required='true' onChange={(e) => setCustomer({ ...customer, email: e.target.value })} type = 'text' className = 'form-control' placeholder = "Email"></input>
                               <p className='text-left text-danger ml-1'>{emailError}</p>
                           </div>
                           <div className = 'form-group'>
                               <input id = 'mobile' required='true' onChange={(e) => setCustomer({ ...customer, mobile: e.target.value })} type = 'text' className = 'form-control' placeholder = "Mobile Number"></input>
                               <p className='text-left text-danger ml-1'>{mobileError}</p>
                           </div>
                           <div className = 'form-group'>
                               <input id = 'password' required='true' onChange={(e) => setCustomer({ ...customer, password: e.target.value })} type = 'text' className = 'form-control' placeholder = "Password"></input>
                               <p className='text-left text-danger ml-1'>{passwordError}</p>
                           </div>
                           <div className = 'form-group'>
                               <input id = 'city' required='true' onChange={(e) => setCustomer({ ...customer, city: e.target.value })} type = 'text' className = 'form-control' placeholder = "City"></input>
                               <p className='text-left text-danger ml-1'>{cityError}</p>
                           </div>
                           <div class="pretty p-image p-plain float-left mt-4 mr-2">
                              <input id='confirm' type="checkbox" className="float-right"/>
                              <div class="state">
                                <img class="image" src="https://png.pngtree.com/png-vector/20210319/ourmid/pngtree-checkmark-vector-icon-in-flat-style-png-image_3094466.jpg"/>
                                <label>Check this box to confirm the details</label>
                              </div>
                           </div>
                           <button className = 'btn btn-primary'>Register</button>
                     </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <Footer2/>
  </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    insertCustomer: (customer) => dispatch(insertCustomer(customer))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCustomer)