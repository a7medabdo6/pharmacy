import React from "react";
import { Input } from "semantic-ui-react";
import Image from "next/image";
import search from "../assets/img/searchicon.png";
import { Icon } from "semantic-ui-react";

const SerachBar = () => {
  return (
    <div className="position-relative" style={{ width: "95%" }}>
      <Icon
        disabled
        name="search"
        style={{
          position: "absolute",
          top: "13px",
          left: " 4px",
          fontSize: "15px",
        }}
      />
      <input
        type="text"
        style={{
          backgroundColor: "#FAFBFB",
          borderRadius: "10px",
          width: "100% !important",
          // Apply styles to the placeholder
          "::placeholder": {
            marginLeft: "15px",
            fontStyle: "italic",
            color: "red",
            /* You can add any other styles you want to the placeholder here */
          },
        }}
        className="form-control w-100 inputsearch"
        placeholder="Search products"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </div>
  );
};

export default SerachBar;
