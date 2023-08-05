import React from "react";
import "./Overlay.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Overlay = ({ desc,show }) => {
  const [hide, setHide] = useState(true);
  return (
    <div className={hide ? "overlay_detail" : "overlay_hide"}>
      <CloseIcon
        onClick={() => {
          setHide(false);
        }}
        className="closeIcon"
        sx={{ fontSize: 40 }}
      />
      <p>{desc}</p>
    </div>
  );
};

export default Overlay;
