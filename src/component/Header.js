import BluetoothIcon from "@mui/icons-material/Bluetooth";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";
import React from "react";
import FourGPlusMobiledataIcon from "@mui/icons-material/FourGPlusMobiledata";
import './Header.css'
const header = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  return (
    <div className="header">
      <div className="time_section">
        <span>{showTime}</span>
      </div>

      <div className="icons_container">
        <AccessAlarmsIcon />
        <BluetoothIcon />
        <FourGPlusMobiledataIcon />
        <span>94%</span>
        <BatteryCharging90Icon />
      </div>
    </div>
  );
};

export default header;
