import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

const DropdownFilter = () => {
    const [options,setoptions] =useState([{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}])

  return (
    <div>
      <Multiselect
options={options} // Options to display in the dropdown
// Function will trigger on remove event
showCheckbox={true}
placeholder="All"
disablePreSelectedValues={false}
displayValue="name" // Property name to display in the dropdown options
/>
    </div>
  )
}

export default DropdownFilter
