import React from "react";
import "./Overlay.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Overlay = ({ desc }) => {
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
      {desc}
    </div>
  );
};

export default Overlay;
