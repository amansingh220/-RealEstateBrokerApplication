import React from "react";
import cns from "classnames";
import classes from "./style.module.scss";

const PropertyModal = ({ data, show, toggle }) => {
  console.log("prpdata", JSON.stringify(data));
  return (
    <>
      {show && (
        <div className={cns(classes.mainContainer)}>
          <div className={cns(classes.customModal)}>
            <div className={cns(classes.modalHeader)}>
              <span className={cns(classes.toggleBtn)} onClick={toggle}>
                x
              </span>
            </div>
            <div className={cns(classes.modalBody)}>
              {Object.keys(data).map((key) => (
                <div className={cns(classes.keyvalue)}>
                  {key}:{String(data[key])}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyModal;
