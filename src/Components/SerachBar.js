import React from "react";
import { Input } from "semantic-ui-react";
import Image from "next/image";
import search from "../assets/img/searchicon.png";

const SerachBar = () => {
  return (
    <div className="position-relative" style={{ width: "95%" }}>
      <Image
        src={search}
        style={{ position: "absolute", right: "80px", top: "4px",left:"1px" }}
        alt="Next.js Logo"
        width={19}
        height={24}
        priority
      />
      <input
        type="text"
        style={{
          backgroundColor: "#FAFBFB",
          borderRadius: "10px",
          width: "100% !important",
          // Apply styles to the placeholder
          "::placeholder": {
            marginLeft:"15px",
            fontStyle: "italic",
            color:"red"
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
