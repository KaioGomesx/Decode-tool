import React from "react";

import "./styles.css";

function InputKey({
  value: key,
  onInputChange,
}: {
  value: string;
  onInputChange: (text: string) => void;
}) {
  return (
    <div className="inputDiv">
      <div className="key">
        <span role="img" aria-label="sheep">
          🔑
        </span>
      </div>
      <input
        type="text"
        value={key}
        onChange={({ target }) => onInputChange(target.value)}
        placeholder="Coloque a chave"
      />
    </div>
  );
}

export default InputKey;
