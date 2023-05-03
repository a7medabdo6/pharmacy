import React from "react";
import { Input } from "semantic-ui-react";

const SerachBar = () => {
  return (
    <input
      type="text"
      style={{
        backgroundColor: "#FAFBFB",
        borderRadius: "10px",
        width: "78% !important",
      }}
      className="form-control w-100 inputsearch"
      placeholder="Search products"
      aria-label="Search"
      aria-describedby="button-addon2"
    />
  );
};

export default SerachBar;
