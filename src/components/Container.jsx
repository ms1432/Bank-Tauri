import React from "react";
import "./Container.css";

function Container({ children, customStyle }) {
  return (
    <div className="container" style={customStyle}>
      {children}
    </div>
  );
}

export default Container;
