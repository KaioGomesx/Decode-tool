import React from "react";

function InputKey({
  value: key,
  onInputChange,
}: {
  value: string;
  onInputChange: (text: string) => void;
}) {
  return (
    <div className="flex justify-self-center flex-row rounded-lg ml-4 sm:ml-8 mt-4 h-8 bg-select">
      <div className="flex flex-1 pl-1 pr-2 rounded-lg bg-key">
        <span role="img" aria-label="key-image" className="self-center">
          🔑
        </span>
      </div>
      <input
        className="w-40 h-8 pl-2 pr-4 rounded-full text-sm focus:outline-none bg-select text-white placeholder-gray-placeholder"
        value={key}
        onChange={({ target }) => onInputChange(target.value)}
        placeholder="Coloque a chave"
      />
    </div>
  );
}

export default InputKey;
