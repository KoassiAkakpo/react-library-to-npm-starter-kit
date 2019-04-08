import React from "react";
import "./styles.css";
const MyAwesomeComponent = ({ spinnerColor }) => {
  return (
    <div className="loader">
      <div
        className="spinner"
        style={{ borderTop: `10px solid ${spinnerColor}` }}
      />
    </div>
  );
};

export default MyAwesomeComponent;
