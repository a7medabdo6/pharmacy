import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useRouter } from "next/router"; // Import useRouter hook from next/router
import Postcontactus from "../../Apis/Contact";
const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Initialize useRouter hook

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (route) => {
    router.push(route); // Navigate to the specified route using next/router
  };

  return (
    <Box sx={{ width: "100%", height: "80px", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ borderRadius: "15px 15px 0 0" }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon style={{ color: value == 0 ? "blue" : "grey" }} />}
          onClick={() => handleIconClick("/")}
        />
        <BottomNavigationAction
          label="Products"
          icon={<StoreIcon style={{ color: value == 1 ? "blue" : "grey" }} />}
          onClick={() => handleIconClick("/products/all")}
        />
        <BottomNavigationAction
          label="Requests"
          icon={<HomeIcon style={{ color: value == 2 ? "blue" : "grey" }} />}
          onClick={() => handleIconClick("/requests")}
        />
        <BottomNavigationAction
          label="Contact Us"
          icon={
            <PhoneEnabledIcon style={{ color: value == 3 ? "blue" : "grey" }} />
          }
          onClick={() => handleIconClick("/contactus")}
        />
      </BottomNavigation>
    </Box> //test
  );
};
export default BottomNav;
