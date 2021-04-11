import React from "react";
import Loading from "./Loading";
import Header from "./Header";

// LoadingScreen component is used to show animation while data is being loading from the back-end.
function LoadingScreen() {
  return (
    <React.Fragment>
      <Header />

      <div
        className="loading"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "green",
        }}
      >
        <Loading />
      </div>
    </React.Fragment>
  );
}

// Exporting LoadingScreen component.
export default LoadingScreen;
