/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Options from "../Options";

import "./styles.css";

function Header() {
  return (
    <header className="flex flex-1 w-full flex-column items-center justify-center sm:pl-4 sm:justify-between mb-6 sm:mb-20">
      <a
        href="/"
        className="title text-base text-white hidden sm:block font-semibold"
      >
        DECODE
      </a>
      <Options />
    </header>
  );
}

export default Header;
