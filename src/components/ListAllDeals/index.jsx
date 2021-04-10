import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./style.module.scss";
import Header from "./../Header2";
import cns from "classnames";
import PropertyModal from "./../Modal/PropertyModal";

const ListAllDeals = () => {
  const [allDealsData, setAllDealsData] = useState([]);
  const [dataFetched, setdataFetched] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [propertyModalData, setPropertyModalData] = useState({});

  useEffect(() => {
    const res = axios
      .get("http://localhost:9000/rba/listalldeals")
      .then(({ data }) => {
        setAllDealsData(data);
        setdataFetched(true);
      });
  }, []);
  const togglePropertyModal = () => {
    setShowPropertyModal(!showPropertyModal);
  };
  const handlePropertyClick = (index) => {
    setPropertyModalData(allDealsData[index]["property"]);
    togglePropertyModal();
  };

  const tableHeaders = [
    "DealId",
    "DealDate",
    "DealCost",
    "CustId",
    "CustName",
    "Property",
  ];
  return (
    <>
      <Header />

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
          {dataFetched &&
            allDealsData.map(
              ({ dealId, dealDate, dealCost, customer, property }, index) => (
                <div
                  className={cns(
                    "d-flex flex-row",
                    classes.tableRow,
                    classes.TableData
                  )}
                >
                  <div className="col-2 col-sm-2 d-inline-block">{dealId}</div>
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
        {/*         
<div className="flex-row dDisplayNone">
    <div *ngFor="let user of fetchedUserData" className="flex-row mb-3 tableRow">
        <div *ngFor="let key of keys" className="col-12 d-inline-block">
            <span className="label">{{titleCase(key)}}: </span>
            <span className="data">{{user[key]}}</span>
        </div>
    </div>
</div> */}
      </div>
      <PropertyModal
        data={propertyModalData}
        show={showPropertyModal}
        toggle={togglePropertyModal}
      />
    </>
  );
};

export default ListAllDeals;
