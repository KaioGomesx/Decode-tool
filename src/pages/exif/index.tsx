import React, { useState } from "react";

import Header from "../../components/Header";

import getExif from "../../services/getApiExif";

import "./style.css";

function Exif() {
  const [imageUrl, setImageUrl] = useState("");
  const [exifData, setExifData] = useState("");

  return (
    <div className="exif">
      <Header />
      <div className="container">
        <div className="inputContainer">
          <div className="inputBox">
            <div className="boxTitle">Exif Tool</div>
            <input
              className="boxBody"
              value={imageUrl}
              onChange={({ target }) => setImageUrl(target.value)}
              placeholder="Image URL"
            />
            <div className="buttonContainer">
              <button
                onClick={() =>
                  getExif(imageUrl).then(setExifData).catch(console.warn)
                }
              >
                Show Exif
              </button>
            </div>
          </div>
          <div className="exifResult">
            {exifData === "" ? "" : JSON.stringify(exifData, null, 2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exif;
