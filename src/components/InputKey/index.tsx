import React from "react";

import "./styles.css";

function InputKey({
  key,
  setKey,
}: {
  key: string;
  setKey: (text: string) => void;
}) {
  return (
    <div className="inputDiv">
      <div className="key">
        <span role="img" aria-label="sheep">
          🔑
        </span>
      </div>
      <input
        value={key}
        onChange={({ target }) => setKey(target.value)}
        placeholder="Coloque a chave"
      />
    </div>
  );
}

export default InputKey;
