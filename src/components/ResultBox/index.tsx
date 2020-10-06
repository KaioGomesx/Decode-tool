import React from "react";

function ResultBox({ title, body }: { title: string, body: string}) {
  return (
    <div className="flex flex-col container w-10/12 sm:w-2/5 h-container mx-auto overflow-hidden rounded">
      <div className="text-left font-semibold pl-3 bg-title text-white">
        {title}
      </div>
      <div className="bg-body w-full h-full">{body}</div>
    </div>
  );
}

export default ResultBox;
