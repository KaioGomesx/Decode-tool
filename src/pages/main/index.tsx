import React, { useState } from "react";

import Header from "../../components/Header";

import "./styles.css";

type Cypher = {
  name: string;
  key: boolean;
};

function Main() {
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

  const [cypher, setCypher] = useState<Cypher>(cyphers[0]);
  const [key, setKey] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box1">
          <div className="boxTitle">Text</div>
          <textarea placeholder="Digite o texto aqui" cols={70} rows={18} />
          <div className="dropdown">
            <select
              className="select"
              name="Cyphers"
              value={cypher.name}
              onChange={(event) =>
                setCypher(
                  cyphers.find((item) => item.name === event.target.value) || {
                    name: "",
                    key: false,
                  }
                )
              }
            >
              {cyphers.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            {cypher.key ? (
              <div className="inputDiv">
                <div className="key">
                  <span role="img" aria-label="sheep">
                    🔑
                  </span>
                </div>
                <input
                  type="text"
                  value={key}
                  onChange={({ target }) => setKey(target.value)}
                  placeholder="Coloque a chave"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="separator" />
        <div className="box2">
          <div className="boxTitle">{cypher.name}</div>
          <textarea name="fon" id="fon" cols={70} rows={18}></textarea>
        </div>
      </div>
    </div>
  );
}

export default Main;
