import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import InputKey from "../../components/InputKey";
import SelectCypher from "../../components/SelectCypher";
import InputBox from "../../components/InputBox";
import ResultBox from "../../components/ResultBox";

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

function onChange(text: string, setCypher: (cypher: Cypher) => void) {
  setCypher(
    cyphers.find((item) => item.name === text) || {
      name: "",
      key: false,
    }
  );
}

function Main() {
  const [cypher, setCypher] = useState<Cypher>(cyphers[0]);
  const [key, setKey] = useState("");
  const [encodeResult, setEncodeResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setEncodeResult(getCypherResult(cypher, inputValue, key));
  }, [inputValue, cypher, key, encodeResult]);

  return (
    <div className="App">
      <Header />
      <div className="flex flex-col h-body">
        <div className="flex flex-col sm:flex-row">
          <InputBox onChange={setInputValue} />
          <ResultBox title={cypher.name} body={encodeResult} />
        </div>
        <div className="flex flex-row ml-6 sm:ml-16">
          <SelectCypher
            cyphers={cyphers}
            cypher={cypher}
            onChange={(text) => onChange(text, setCypher)}
          />
          {cypher.key ? <InputKey value={key} onInputChange={setKey} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Main;
