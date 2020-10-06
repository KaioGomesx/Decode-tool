import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import InputKey from "../../components/InputKey";
import SelectCypher from "../../components/SelectCypher";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setEncodeResult(getCypherResult(cypher, inputValue, key))
  }, [
    inputValue,
    cypher,
    key,
    encodeResult
  ]);

  return (
    <div className="App">
      <Header />
      <div className="flex h-body">
        <div className="flex-col w-2/5 mx-auto">
          <div className="flex-col container h-container overflow-hidden rounded">
            <div className="text-left font-medium pl-3 bg-title text-white">
              Text
            </div>
            <textarea
              className="bg-body placeholder-gray-placeholder w-full resize-none h-full outline-none overflow-hidden"
              placeholder="Digite o texto aqui"
              value={inputValue}
              onChange={({ target }) => {
                setInputValue(target.value);
              }}
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <SelectCypher
              cyphers={cyphers}
              cypher={cypher}
              onChange={(text) => onChange(text, setCypher)}
            />
            {cypher.key ? (
              <InputKey value={key} onInputChange={setKey} />
            ) : ''}
          </div>
        </div>
        <div className="flex flex-col container w-2/5 h-container mx-auto overflow-hidden rounded">
          <div className="text-left font-medium pl-3 bg-title text-white">
            {cypher.name}
          </div>
          <div className="bg-body w-full h-full">{encodeResult}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
