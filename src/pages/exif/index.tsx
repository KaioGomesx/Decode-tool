import React, { useState } from "react";

import Header from "../../components/Header";

import getExif from "../../services/getApiExif";

function Exif() {
  const [imageUrl, setImageUrl] = useState("");
  const [exifData, setExifData] = useState("");

  return (
    <div className="h-body overflow-x-auto">
      <Header />
      <div className="container mx-auto flex flex-col w-3/4 h-auto rounded-md items-center">
        <div className="bg-title text-center text-white font-semibold rounded-t-lg w-3/4">
          Exif Tool
        </div>
        <div className="bg-body rounded-b-lg w-3/4">
          <input
            className="bg-body placeholder-gray-placeholder w-full resize-none outline-none p-1 rounded-b-lg"
            value={imageUrl}
            onChange={({ target }) => setImageUrl(target.value)}
            placeholder="Image URL"
          />
        </div>
        <button
          className="w-1/6 rounded-lg text-white bg-button self-center mt-6 mb-6 font-semibold"
          onClick={() =>
            getExif(imageUrl).then(setExifData).catch(console.warn)
          }
        >
          Show Exif
        </button>
        <div className="container mx-auto w-5/6 h-container p-3 whitespace-pre rounded-lg overflow-auto bg-button text-white">
          {exifData === "" ? "" : exifData}
        </div>
      </div>
    </div>
  );
}

export default Exif;
