import React, { useEffect } from "react";
import { connect } from "react-redux";
import { insertCustomer } from "../redux/Index";

function AddCustomer({ customerData, insertCustomer }) {
  useEffect(() => {
    //take the below input from the user by using form.
    let customer = {
      custId: 2,
      propId: 15,
    };

    insertCustomer(customer);
  }, []);

  return customerData.loading ? (
    <h2>Loading</h2>
  ) : customerData.error ? (
    <h4 className="text-danger mt-3">
      Test For Add Customer Functionality Failed With Following Message :{" "}
      {customerData.error}
    </h4>
  ) : (
    <div>
      <h4 className="text-success mt-3">
        Test For Add Customer Functionality Successful
      </h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customerData: state.addedCustomerDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertCustomer: (customer) => dispatch(insertCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
