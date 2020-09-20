import React, { useState, useEffect } from "react";

import Header from "../../components/Header";

import "./styles.css";

import rotN from "../../decoders/rot";

function Rot() {
  const [inputValue, setInputValue] = useState("");
  const [rotResult, setRotResult] = useState<string[]>([]);

  useEffect(() => {});

  return (
    <div className="rot">
      <Header />
      <div className="container">
        <div className="inputContainer">
          <div className="inputBox">
            <div className="boxTitle">ROT N</div>
            <input
              className="boxBody"
              value={inputValue}
              onChange={({ target }) => {
                setInputValue(target.value);
                setRotResult(rotN(target.value));
              }}
              placeholder="Text"
            />
          </div>
          <div className="rotResult">
            {rotResult.map((item, ind) => {
              const index = ind + 1;

              return (
                <span
                  key={ind}
                  className="rots"
                >{`ROT ${index} = ${item}\n`}</span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rot;
