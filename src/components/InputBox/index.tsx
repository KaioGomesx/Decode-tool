import React, { useState } from "react";


function InputBox({ onChange }: { onChange: (str: string) => void }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="flex-col w-10/12 sm:w-2/5 mx-auto container h-container overflow-hidden rounded mb-8">
      <div className="text-left font-semibold pl-3 bg-title text-white">
        Text
      </div>
      <textarea
        className="bg-body placeholder-gray-placeholder w-full resize-none h-full outline-none overflow-hidden"
        placeholder="Digite o texto aqui"
        value={inputValue}
        onChange={({ target }) => {
          setInputValue(target.value);
          onChange(target.value)
        }}
      />
    </div>
  );
}

export default InputBox
