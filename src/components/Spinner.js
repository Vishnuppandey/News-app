import React from "react";
import loader from "./loader.jpg.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="loader" />
    </div>
  );
};

export default Spinner;
