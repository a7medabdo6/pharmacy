import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
const BottomNav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
        
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={ <HomeIcon />} />
          <BottomNavigationAction label="Products"  icon={ <StoreIcon />}  />
          <BottomNavigationAction label="Requests" icon={ <HomeIcon />} />
          <BottomNavigationAction label="Contact Us"  icon={ <PhoneEnabledIcon />} />

        </BottomNavigation>
      </Box>
    )
}
export default BottomNav