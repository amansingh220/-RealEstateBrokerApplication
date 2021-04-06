import React from "react";
import '../rbacss/header.css'



    function Footer(props) {
      return (
        <div>
    <head>
      <title>Footer Bootstrap 4</title>
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css" rel="stylesheet"/>
    </head>
    <body>
    
    <footer class="page-footer bg-dark">
    
      <div class="bg-success">
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
           
            <div class="col-md-12 text-center"> 
                <a href="#"><i class="fab fa-facebook-f white-text mr-4"> </i></a>         
                <a href="#"><i class="fab fa-twitter white-text mr-4"> </i></a>
                <a href="#"><i class="fab fa-google-plus-g white-text mr-4"> </i></a>
                <a href="#"><i class="fab fa-linkedin-in white-text mr-4"> </i></a>
                <a href="#"><i class="fab fa-instagram white-text"> </i></a> 
               </div>
    
         </div>
        </div>
      </div>
    
      <div class="container text-center text-md-left mt-5">
        <div class="row">
    
          <div class="col-md-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">The Providers</h6>
            <hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 125px; height: 2px"/>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
    
          <div class="col-md-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Products</h6>
            <hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 85px; height: 2px"/>
           
             <ul class="list-unstyled">
                <li class="my-2"><a href="#">Html 5</a></li>        
                <li class="my-2"><a href="#">Css 3</a></li>
                <li class="my-2"><a href="#">Bootstrap 4</a></li>
                <li class="my-2"> <a href="#">JavaScript</a></li>         
              </ul>
          </div>
      
          <div class="col-md-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 110px; height: 2px"/>
              <ul class="list-unstyled">
                <li class="my-2"><a href="#">Home</a></li>        
                <li class="my-2"><a href="#">About</a></li>
                <li class="my-2"><a href="#">Services</a></li>
                <li class="my-2"> <a href="#">Contact</a></li>         
              </ul>
          </div>
    
          <div class="col-md-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 75px; height: 2px"/>
              <ul class="list-unstyled">
                <li class="my-2"><i class="fas fa-home mr-3"></i> Karachi, NY 10012, US</li>
                <li class="my-2"><i class="fas fa-envelope mr-3"></i> theproviders@gmail.com</li>
                <li class="my-2"><i class="fas fa-phone mr-3"></i> + 01 234 567 88</li>
                <li class="my-2"><i class="fas fa-print mr-3"></i> + 01 234 567 89</li>
              </ul>
          </div>
        </div>
      </div>
    
      <div class="footer-copyright text-center py-3">
        <p>&copy; Copyright
        <a href="#">theprovider.com</a></p>
        <p>Designed by The Providers</p>
      </div>
    </footer>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js"></script>
    </body>
        </div>
      );
}

export default Footer;
