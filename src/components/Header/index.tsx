/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Options from "../Options";

import "./styles.css";

function Header() {
  return (
    <header>
      <a href="/" className="title">
        Decode
      </a>
      <Options />
    </header>
  );
}

export default Header;
