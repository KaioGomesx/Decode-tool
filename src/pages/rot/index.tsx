import React, { useState } from "react";

import Header from "../../components/Header";

import rotN from "../../decoders/rot";

function buildRootsSpans(rotArray: string[]) {
  return rotArray.map((item, ind) => {
    const index = ind + 1;
    return (
      <span key={ind} className="rots">{` ROT ${index} = ${item}\n`}</span>
    );
  });
}

function Rot() {
  const [inputValue, setInputValue] = useState("");
  const [rotResult, setRotResult] = useState<string[]>([]);

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
          <div className="rotResult">{buildRootsSpans(rotResult)}</div>
        </div>
      </div>
    </div>
  );
}

export default Rot;
