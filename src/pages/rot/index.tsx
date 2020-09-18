import React from "react";

import Header from "../../components/Header";

import "./styles.css";

function Rot() {
  return (
    <div className="rot">
      <Header />
      <div className="container">
        <div className="inputContainer">
          <div className="inputBox">
            <div className="boxTitle">ROT N</div>
            <input
              className="boxBody"
              value={""}
              onChange={() => {}}
              placeholder="Text"
            />
          </div>
          <div className="rotResult"></div>
        </div>
      </div>
    </div>
  );
}

export default Rot;
