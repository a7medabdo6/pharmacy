import React from "react";
import { Icon } from "semantic-ui-react";
import { searchAllProducts } from "../Apis/products";

const SerachBar = ({ showBigScreen, setProducts }) => {
  const handleSearch = async (e) => {
    const wordSearch = e.target.value;
    const targetProducts = await searchAllProducts(wordSearch);
    if (targetProducts.count) {
      setProducts(targetProducts.results);
    }
  };

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
          height: "50px",
        }}
        className="form-control py-2 fs-6"
        placeholder="Search products"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SerachBar;
