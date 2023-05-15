import React from "react";
import { Icon } from "semantic-ui-react";

const SerachBar = ({ showBigScreen }) => {
  return (
    <div
      className={`position-relative w-100 mb-2 ${
        showBigScreen ? "d-none d-md-block" : "d-block d-md-none"
      }`}
    >
      <Icon
        name="search"
        className="position-absolute"
        style={{
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          opacity: "0.4",
          height: "fit-content",
        }}
      />
      <input
        type="text"
        style={{
          paddingLeft: "2.55rem",
          backgroundColor: "#f7f7f7",
        }}
        className="form-control py-2 fs-6"
        placeholder="Search products"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </div>
  );
};

export default SerachBar;
