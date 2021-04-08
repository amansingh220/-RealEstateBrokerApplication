import React from "react";

function NewComponent() {
/*   var  stylesheet = document.styleSheets[3];
  stylesheet.disabled = true; */
    return (
        <div>
          <title>Footer Bootstrap 4</title>
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
          {/* Google Fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Bootstrap core CSS */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
          {/* Material Design Bootstrap */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css" rel="stylesheet" />
          <footer className="page-footer bg-dark">
            <div className="bg-success">
              <div className="container">
                <div className="row py-4 d-flex align-items-center">
                  <div className="col-md-12 text-center"> 
                    <a href="#"><i className="fab fa-facebook-f white-text mr-4"> </i></a>         
                    <a href="#"><i className="fab fa-twitter white-text mr-4"> </i></a>
                    <a href="#"><i className="fab fa-google-plus-g white-text mr-4"> </i></a>
                    <a href="#"><i className="fab fa-linkedin-in white-text mr-4"> </i></a>
                    <a href="#"><i className="fab fa-instagram white-text"> </i></a> 
                  </div>
                </div>
              </div>
            </div>
            <div className="container text-center text-md-left mt-5">
              <div className="row">
                <div className="col-md-3 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">The Providers</h6>
                  <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '125px', height: '2px'}} />
                  <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="col-md-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">Products</h6>
                  <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '85px', height: '2px'}} />
                  <ul className="list-unstyled">
                    <li className="my-2"><a href="#">Html 5</a></li>        
                    <li className="my-2"><a href="#">Css 3</a></li>
                    <li className="my-2"><a href="#">Bootstrap 4</a></li>
                    <li className="my-2"> <a href="#">JavaScript</a></li>         
                  </ul>
                </div>
                <div className="col-md-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                  <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '110px', height: '2px'}} />
                  <ul className="list-unstyled">
                    <li className="my-2"><a href="#">Home</a></li>        
                    <li className="my-2"><a href="#">About</a></li>
                    <li className="my-2"><a href="#">Services</a></li>
                    <li className="my-2"> <a href="#">Contact</a></li>         
                  </ul>
                </div>
                <div className="col-md-3 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">Contact</h6>
                  <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width: '75px', height: '2px'}} />
                  <ul className="list-unstyled">
                    <li className="my-2"><i className="fas fa-home mr-3" /> Mathura, NY 10012, INDIA</li>
                    <li className="my-2"><i className="fas fa-envelope mr-3" /> RealEstateBroker@gmail.com</li>
                    <li className="my-2"><i className="fas fa-phone mr-3" /> + 919760694337</li>
                    <li className="my-2"><i className="fas fa-print mr-3" /> + 919545856521</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">
              <p>© Copyright
                <a className="ml-2" href="#">RealEstateBroker.com</a></p>
              <p>Designed by The Group 4</p>
            </div>
          </footer>
        </div>
      );
}

export default NewComponent;