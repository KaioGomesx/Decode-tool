import React from "react";
import { useLocation } from "react-router-dom";

import Option from "../../components/Option";

function Options() {
  let { pathname } = useLocation();

  return (
    <nav className="options sm:mr-8">
      {pathname === "/decoders" ? (
        ""
      ) : (
        <Option text="DECODERS" href="decoders" />
      )}
      {pathname === "/exif" ? "" : <Option text="EXIF" href="exif" />}
      {pathname === "/rot-n" ? "" : <Option text="ROT N" href="rot-n" />}
      {pathname === "/regex" ? "" : <Option text="REGEX" href="regex" />}
      {pathname === "/about" ? "" : <Option text="ABOUT" href="about" />}
    </nav>
  );
}

export default Options;
