import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

const DropdownFilter = ({ options, title }) => {
  return (
    <div className="w-100 mb-2 mt-2">
      <p className="mb-1">{title}</p>
      <Multiselect
        options={options} // Options to display in the dropdown
        // Function will trigger on remove event
        // showCheckbox={true}
        singleSelect={true}
        placeholder="All"
        disablePreSelectedValues={true}
        displayValue="name" // Property name to display in the dropdown options
      />
    </div>
  );
};

export default DropdownFilter;
