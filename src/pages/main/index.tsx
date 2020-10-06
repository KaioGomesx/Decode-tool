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

enum Cyphers {
  Binary="Binary",
  Reverse="Reverse",
  Vigenere="Vigenere",
  AtBash="Atbash",
  Octal="Octal",
  Hex="Hex",
  Decimal="Decimal",
  Base64="Base64",
  Morse="Morse",
  Beaufort="Beaufort Cipher",
  RailFence="Rail Fence Cipher",
};

const cyphers = [
  { name: Cyphers.Binary, key: false },
  { name: Cyphers.Reverse, key: false },
  { name: Cyphers.Vigenere, key: true },
  { name: Cyphers.AtBash, key: false },
  { name: Cyphers.Octal, key: false },
  { name: Cyphers.Hex, key: false },
  { name: Cyphers.Decimal, key: false },
  { name: Cyphers.Base64, key: false },
  { name: Cyphers.Morse, key: false },
  { name: Cyphers.Beaufort, key: true },
  { name: Cyphers.RailFence, key: true },
];

function getCypherResult(cypher: Cypher, text: string, key?: string) {
  switch (cypher.name) {
    case Cyphers.Binary:
      return text2binary(text);
    case Cyphers.Reverse:
      return reverseString(text);
    case Cyphers.Vigenere:
      return vigenere2text(text, key || "");
    case Cyphers.AtBash:
      return atbash2text(text);
    default:
      return "";
  }
}

function onChange(text: string, setCypher: (cypher: Cypher) => void) {
  setCypher(
    cyphers.find((item) => item.name === text) ?? {
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
