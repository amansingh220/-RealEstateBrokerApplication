import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./../Input";
import { useDispatch } from "react-redux";
import { updateDealData, removeDealData } from "./../../redux/Index";
import axios from "axios";
import cns from "classnames";
import classes from "./style.module.scss";
import PropertyModal from "./../Modal/PropertyModal";
import Header from "../Header2";
import Footer2 from "../Footer2";
//This is a function for add deal method
const AddDeal = () => {
  const [dealSuccess, setDealSuccess] = useState(false);
  const [dealResponse, setdealResponse] = useState([]);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [propertyModalData, setPropertyModalData] = useState({});
  const dispatch = useDispatch();

  const togglePropertyModal = () => {
    setShowPropertyModal(!showPropertyModal);
  };
  const handlePropertyClick = (index) => {
    setPropertyModalData(dealResponse[index]["property"]);
    togglePropertyModal();
  };
  //This is function for back button when we click on back then field value should be empty automatically
  const handleBack = () => {
    setFieldValue("custId", "");
    setFieldValue("propId", "");
    setFieldValue("agree", false);
    setDealSuccess(false);
    setdealResponse([]);
    setShowPropertyModal(false);
    setPropertyModalData({});
    dispatch(removeDealData());
  };
  //This is for table header when deal happened then table display with full deal details
  const tableHeaders = [
    "DealId",
    "DealDate",
    "DealCost",
    "CustId",
    "CustName",
    "Property",
  ];
  //here used Formik which is take care of the repetitive and annoying stuff—keeping track of values/errors/visited fields and handling submission
  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    setValues,
    setFieldValue,
    handleBlur,
    getFieldProps,
    touched,
    isValid,
  } = useFormik({
    enableReinitialize: true,
    initialValues: { custId: "", propId: "", agree: false },
    //we used yup with formik because of form validation that if dealer enter string or anything other than number than it shows some msg
    validationSchema: yup.object({
      custId: yup
        .string()
        .trim()
        .required("Please Enter Customer Id")
        .matches(/^[0-9]+$/, "CustId must be a Number"),
      propId: yup
        .string()
        .trim()
        .required("Please Enter Property Id")
        .matches(/^[0-9]+$/, "CustId must be a Number"),
      agree: yup
        .bool()
        .oneOf([true], "Please Check this box to confirm the details"),
    }),
    // here if we click submit then axios post fetch data from spring boot backend application
    onSubmit: () => {
      axios
        .post(`http://localhost:9000/rba/adddeal`, {
          custId: values.custId,
          propId: values.propId,
        })
        .then(({ data }) => {
          setdealResponse(Array(data));
          console.log("res", data);
          setDealSuccess(true);
          dispatch(
            updateDealData({
              custId: values.custId,
              propId: values.propId,
              dealResponse: data,
            })
          );
        })
        .catch((err) => {
          setDealSuccess(false);
          alert("Error Occurred");
        });
    },
  });

  return (
    <>
      <Header />
      {/* this is main form with bootstrap clases and css and classnames used to join different classes based on diff condition */}
      <div className={classes.fixture}>
        <div
          className={cns(
            classes.container1,
            dealSuccess ? "d-none" : "d-inline-block"
          )}
        >
          <form onSubmit={handleSubmit}>
            <div className={cns("form-group", classes.formname)}>
              <label htmlFor="number">Customer Id:</label>
              <Input
                className={cns(classes.form1)}
                {...getFieldProps("custId")}
                name="custId"
                className={cns("form-control", classes.form)}
                placeholder="Enter customer Id"
                value={values.custId}
                onChange={handleChange}
                error={errors?.custId}
              />
            </div>
            <br />
            <div className={cns("form-group", classes.formname)}>
              <label htmlFor="number">Property Id:</label>
              <Input
                className={cns(classes.form1)}
                {...getFieldProps("propId")}
                name="propId"
                className={cns("form-control", classes.form)}
                placeholder="Enter property Id"
                values={values.propId}
                onChange={handleChange}
                error={errors?.propId}
              />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <Input
                  {...getFieldProps("agree")}
                  name="agree"
                  className="form-check-input"
                  type="checkbox"
                  checked={values.agree}
                  onChange={handleChange}
                />{" "}
                Check this box to confirm the details
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* here if all criteria meet and deal is succesfully added then full table show with details */}
      {dealSuccess && (
        <div className={classes.mainContainer}>
          <div
            className={cns(
              "flex-row m-3 p-2 mx-auto",
              // classes.mDisplayNone,
              classes.dTable
            )}
          >
            <div className={cns("d-flex flex-row", classes.tableRow)}>
              {tableHeaders.map((header) => (
                <div
                  className={cns(
                    "col-2 col-sm-2 d-inline-block",
                    classes.tableColHeader
                  )}
                >
                  {header}
                </div>
              ))}
            </div>
            {dealSuccess &&
              dealResponse?.map(
                ({ dealId, dealDate, dealCost, customer, property }, index) => (
                  <div
                    className={cns(
                      "d-flex flex-row",
                      classes.tableRow,
                      classes.TableData
                    )}
                  >
                    <div className="col-2 col-sm-2 d-inline-block">
                      {dealId}
                    </div>
                    <div className="col-2 col-sm-2 d-inline-block">
                      {dealDate}
                    </div>
                    <div className="col-2 col-sm-2 d-inline-block">
                      {dealCost}
                    </div>
                    <div className="col-2 col-sm-2 d-inline-block">
                      {customer?.custId}
                    </div>
                    <div className="col-2 col-sm-2 d-inline-block">
                      {customer?.custName}
                    </div>
                    <div
                      className="col-2 col-sm-2 d-inline-block pointer"
                      onClick={() => {
                        handlePropertyClick(index);
                      }}
                    >
                      Property
                    </div>
                  </div>
                )
              )}
          </div>
          <button onClick={handleBack} className="btn btn-primary">
            Back
          </button>
        </div>
      )}
      <Footer2 />
      <PropertyModal
        data={propertyModalData}
        show={showPropertyModal}
        toggle={togglePropertyModal}
      />
    </>
  );
};

export default AddDeal;
