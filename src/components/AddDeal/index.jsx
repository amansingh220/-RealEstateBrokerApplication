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

  const tableHeaders = [
    "DealId",
    "DealDate",
    "DealCost",
    "CustId",
    "CustName",
    "Property",
  ];

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
      <div>
        <div className={classes.container1}>
          <form
            onSubmit={handleSubmit}
            className={cns(dealSuccess ? "d-none" : "d-block")}
          >
            <div className={cns("form-group", classes.formname)}>
              <label htmlFor="number">custId:</label>
              <Input
                className={cns(classes.form1)}
                {...getFieldProps("custId")}
                name="custId"
                className={cns("form-control", classes.form)}
                placeholder="Enter custId"
                value={values.custId}
                onChange={handleChange}
                error={errors?.custId}
              />
            </div>
            <br />
            <div className={cns("form-group", classes.formname)}>
              <label htmlFor="number">propId:</label>
              <Input
                className={cns(classes.form1)}
                {...getFieldProps("propId")}
                name="propId"
                className={cns("form-control", classes.form)}
                placeholder="Enter propId"
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
                check this box to confirm the details
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer2 />
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

      <PropertyModal
        data={propertyModalData}
        show={showPropertyModal}
        toggle={togglePropertyModal}
      />
    </>
  );
};

export default AddDeal;
