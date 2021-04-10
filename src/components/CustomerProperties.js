import React from 'react';
import Header from './Header'
import Footer from './Footer';

function CustomerProperties(props) {
  
  let loggedCustomer = JSON.parse(sessionStorage.getItem("token"));

  return (
    <React.Fragment>
      <Header/>
      <div className = "py-4 mt-5">
        <div className = "row">
          <table className = "table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th className="bg-success">Property Id</th>
                <th className="bg-success">Property Type</th>
                <th className="bg-success">Configuration</th>
                <th className="bg-success">Offer Cost</th>
                <th className="bg-success">Area Sqft</th>
                <th className="bg-success">Address</th>
                <th className="bg-success">Street</th>
                <th className="bg-success">City</th>
                </tr>
            </thead>
            <tbody>
              {
                  loggedCustomer.properties.map(
                      property => 
                      <tr className="active" key = {property.propId}>
                        <td> {property.propId} </td>   
                        <td> {property.offerType}</td>
                        <td> {property.configuration}</td>
                        <td> {property.offerCost}</td>
                        <td> {property.areaSqft}</td>
                        <td> {property.address}</td>
                        <td> {property.street}</td>
                        <td> {property.city}</td>
                      </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
    );
}

export default CustomerProperties;