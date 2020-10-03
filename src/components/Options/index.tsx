import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

const linkStyle = "text-lg text-white option p-3";

function Options() {
  let { pathname } = useLocation();

  return (
    <nav className="options mr-8">
      {pathname === "/decoders" ? (
        ""
      ) : (
        <a className={linkStyle} href="decoders">
          DECODERS
        </a>
      )}
      {pathname === "/exif" ? (
        ""
      ) : (
        <a className={linkStyle} href="exif">
          EXIF
        </a>
      )}
      {pathname === "/rot-n" ? (
        ""
      ) : (
        <a className={linkStyle} href="rot-n">
          ROT N
        </a>
      )}
      {pathname === "/regex" ? (
        ""
      ) : (
        <a className={linkStyle} href="regex">
          REGEX
        </a>
      )}
      {pathname === "/about" ? (
        ""
      ) : (
        <a className={linkStyle} href="about">
          ABOUT
        </a>
      )}
    </nav>
  );
}

export default Options;
