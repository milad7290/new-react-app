import React from "react";
import "./loading-section.scss";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p className="loading">بارگذاری...</p>;
  };
}
export default WithLoading;
