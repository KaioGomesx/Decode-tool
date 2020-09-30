import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import InputKey from "../../components/InputKey";

import "./styles.css";

import text2binary from "../../decoders/binary";
import reverseString from "../../decoders/reverse";
import vigenere2text from "../../decoders/vigenere";
import atbash2text from "../../decoders/atbash";

type Cypher = {
  name: string;
  key: boolean;
};

const cyphers = [
  { name: "Binary", key: false },
  { name: "Reverse", key: false },
  { name: "Vigenere", key: true },
  { name: "Atbash", key: false },
  { name: "Octal", key: false },
  { name: "Hex", key: false },
  { name: "Decimal", key: false },
  { name: "Base64", key: false },
  { name: "Morse", key: false },
  { name: "Beaufort Cipher", key: true },
  { name: "Rail Fence Cipher", key: true },
];

function getCypherResult(cypher: Cypher, text: string, key?: string) {
  switch (cypher.name) {
    case "Binary":
      return text2binary(text);
    case "Reverse":
      return reverseString(text);
    case "Vigenere":
      return vigenere2text(text, key || "");
    case "Atbash":
      return atbash2text(text);
    default:
      return "";
  }
}

function Main() {
  const [cypher, setCypher] = useState<Cypher>(cyphers[0]);
  const [key, setKey] = useState("");
  const [encodeResult, setEncodeResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setEncodeResult(getCypherResult(cypher, inputValue, key)), [
    inputValue,
    cypher,
    key,
  ]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box1">
          <div className="boxTitle">Text</div>
          <textarea
            placeholder="Digite o texto aqui"
            cols={70}
            rows={18}
            onChange={({ target }) => {
              setInputValue(target.value);
              setEncodeResult(getCypherResult(cypher, target.value));
            }}
            value={inputValue}
          />
          <div className="dropdown">
            <select
              className="select"
              name="Cyphers"
              value={cypher.name}
              onChange={({ target }) => {
                setCypher(
                  cyphers.find((item) => item.name === target.value) || {
                    name: "",
                    key: false,
                  }
                );
              }}
            >
              {cyphers.map((item) => (
                <option value={item.name} key={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            {cypher.key ? <InputKey value={key} onInputChange={setKey} /> : ""}
          </div>
        </div>
        <div className="separator" />
        <div className="box2">
          <div className="boxTitle">{cypher.name}</div>
          <textarea
            className="encodeResult"
            cols={70}
            rows={18}
            disabled
            value={encodeResult}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
