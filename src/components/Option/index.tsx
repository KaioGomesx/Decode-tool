import React from "react";

function Option({ text, href }: { text: string; href: string }) {
  return (
    <a
      className="text-base text-white font-semibold option p-3"
      href={href}
    >
      {text}
    </a>
  );
}

export default Option;
