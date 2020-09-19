import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

function Options() {
  let { pathname } = useLocation();

  return (
    <div className="options">
      {pathname === "/decoders" ? "" : <a href="decoders">DECODERS</a>}
      {pathname === "/exif" ? "" : <a href="exif">EXIF</a>}
      {pathname === "/rot-n" ? "" : <a href="rot-n">ROT N</a>}
      {pathname === "/regex" ? "" : <a href="regex">REGEX</a>}
      {pathname === "/about" ? "" : <a href="about">ABOUT</a>}
    </div>
  );
}

export default Options;
