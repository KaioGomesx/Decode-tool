import React, { useState } from "react";

import Header from "../../components/Header";

import "./styles.css";

function Regex() {
  const [inputValue, setInputValue] = useState("");
  const [regex, setRegex] = useState("");

  return (
    <div className="regex">
      <Header />
      <div className="container">
        <div className="inputContainer">
          <div className="inputBox">
            <div className="boxTitle">Keyword Finder</div>
            <input
              className="boxBody"
              value={inputValue}
              onChange={({ target }) => {
                setInputValue(target.value);
              }}
              placeholder="Text"
            />
          </div>
        </div>
        <div className="regexResult">{regex}</div>
      </div>
    </div>
  );
}

export default Regex;
