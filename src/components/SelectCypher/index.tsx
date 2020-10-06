import React from "react";

type Cypher = {
  name: string;
  key: boolean;
};

type Props = {
  cyphers: Cypher[];
  cypher: Cypher;
  onChange: (str: string) => void;
};

function SelectCypher({ cyphers, cypher, onChange }: Props) {
  return (
    <select
      className="bg-select text-white w-32 h-8 mt-4 rounded-lg focus:outline-none"
      name="Cyphers"
      value={cypher.name}
      onChange={({ target }) => onChange(target.value)}
    >
      {cyphers.map((item) => (
        <option value={item.name} key={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCypher

// setCypher(cyphers.find((item) => item.name === target.value) || {name: "", key: false});