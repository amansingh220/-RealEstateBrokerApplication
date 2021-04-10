import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./../Input";

const AddDeal = () => {
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
    onSubmit: (formValues) => {
      console.log("formValues", formValues);
    },
  });
  useEffect(() => {
    console.log("values", values);
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="number">custId:</label>
        <Input
          {...getFieldProps("custId")}
          name="custId"
          className="form-control"
          placeholder="Enter custId"
          value={values.custId}
          onChange={handleChange}
          error={errors?.custId}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">propId:</label>
        <Input
          {...getFieldProps("propId")}
          name="propId"
          className="form-control"
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
  );
};

export default AddDeal;
